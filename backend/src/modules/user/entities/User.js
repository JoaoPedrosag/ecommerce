import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: Boolean,
    shop_name: String
});

export const User = mongoose.model('user', UserSchema);