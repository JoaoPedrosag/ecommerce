require('dotenv').config();
const { default: mongoose } = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@javaweb.mrxj1c9.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Connected to database!');
}).catch((err)=> {
    console.log(err);
});
