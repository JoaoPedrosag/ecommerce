const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET

export const configProd = {
    DB_URL: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@javaweb.mrxj1c9.mongodb.net/?retryWrites=true&w=majority`,
    JWT_SECRET: JWT_SECRET
}