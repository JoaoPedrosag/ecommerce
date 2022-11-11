const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const AWS_KEY = process.env.AWS_KEY;
const AWS_SECRET = process.env.AWS_SECRET;
const S3_BUCKET = process.env.S3_BUCKET;
const S3_REGION = process.env.S3_REGION;

export const configProd = {
    DB_URL: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@javaweb.mrxj1c9.mongodb.net/?retryWrites=true&w=majority`,
    JWT_SECRET: JWT_SECRET,
    AWS_KEY: AWS_KEY,
    AWS_SECRET: AWS_SECRET,
    S3_BUCKET: S3_BUCKET,
    S3_REGION: S3_REGION
}