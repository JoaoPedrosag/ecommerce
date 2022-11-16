import crypto from 'crypto';
import { config } from '../../../config/index.js';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from '../../../shared/client/S3Client.js'


class ImageRepository {
    s3;

    constructor() {
        this.s3 = S3();
    }

    generateFileName(bytes = 32) {
        return crypto.randomBytes(bytes).toString('hex');
    }

    async upload({ buffer, mimetype }) {
        const imageName = this.generateFileName();
        const params = {
            Bucket: config.S3_BUCKET,
            Key: imageName,
            Body: buffer,
            ContentType: mimetype
        }
        const command = new PutObjectCommand(params);
        const response = await this.s3.send(command);
        return {imageName, response};
    }

    async getUrl(imageName) {
        const url = await getSignedUrl(
            this.s3,
            new GetObjectCommand({
                Bucket: config.S3_BUCKET,
                Key: imageName
            }),
            { expiresIn: 60 }// 60 seconds
        );
        return url;
    }

    async delete(imageName) {
        const deleteParams = {
            Bucket: config.S3_BUCKET,
            Key: imageName,
        }
        return this.s3.send(new DeleteObjectCommand(deleteParams));
    }

}

export { ImageRepository };