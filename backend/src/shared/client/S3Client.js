import { S3Client } from "@aws-sdk/client-s3";
import { config } from '../../config/index.js';

function S3() {
    if (config.S3_URL) {
        return new S3Client({
            credentials: {
                accessKeyId: config.AWS_KEY,
                secretAccessKey: config.AWS_SECRET,
            },
            region: config.S3_REGION,
            endpoint: config.S3_URL,
            sslEnabled: false,
            s3ForcePathStyle: true
        });
    }

    return new S3Client({
        credentials: {
            accessKeyId: config.AWS_KEY,
            secretAccessKey: config.AWS_SECRET,
        },
        region: config.S3_REGION
    });
}

export { S3 }