import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError.js';
import { config } from '../../config/index.js';

export default function AuthMiddleware(request, response, next) {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        throw new AppError('No token provided!');
    }
    try {
        const secret = config.JWT_SECRET;
        jwt.verify(token, secret);
        next();
    } catch (error) {
        throw new AppError(error);
    }
}