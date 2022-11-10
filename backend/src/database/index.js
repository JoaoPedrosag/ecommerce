import mongoose from 'mongoose';
import { config } from '../config/index.js';

await mongoose.connect(config.DB_URL).then(() => {
    console.log('mongo connectado');
}).catch((error) => {
    console.log(error);
})