import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from '../../../config/index.js';


class ImageRepository {
    s3;

    constructor(){
        this.s3 = new S3Client({
            credentials: {
                accessKeyId: config.AWS_KEY,
                secretAccessKey: config.AWS_SECRET,
            },
            region: config.S3_REGION,
            endpoint: config.S3_URL,
            sslEnabled: false,
            s3ForcePathStyle: true
        })
    }

    async upload({ originalname, buffer, mimetype }) {
        
        const params = {
            Bucket: config.S3_BUCKET,
            Key: originalname,
            Body: buffer,
            ContentType: mimetype
        }

        const command = new PutObjectCommand(params);

        const response = await this.s3.send(command);
        
        return response;
    }

}

export { ImageRepository };