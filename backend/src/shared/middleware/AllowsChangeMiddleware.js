import jwt_decode from "jwt-decode";
import AppError from '../errors/AppError.js';
import { UserRepository } from '../../modules/user/repositories/UserRepository.js';
import { VesteRepository } from '../../modules/veste/repositories/VesteRepository.js';

export default async function AuthMiddleware(request, response, next) {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const { shop_name } = request.body;
    const { id } = request.params;
    if (!token) {
        throw new AppError('No token provided!');
    }
    if (!shop_name && !id) {
        throw new AppError('No shop_name ou id provided!');
    }
    try {
        var decoded = jwt_decode(token);
        const user = await new UserRepository().findById(decoded.id);
        if (shop_name) {
            if (shop_name !== user.shop_name || !user.admin) {
                throw new AppError('Unauthorized', 401);
            }
        }
        if (id) {
            const veste = await new VesteRepository().findById(id);
            if (!veste) {
                throw new AppError('Veste não existe');
            }
            if (user.shop_name !== veste.shop_name && !user.admin) {
                throw new AppError('Unauthorized', 401);
            }
        }
        next();
    } catch (error) {
        throw new AppError(error);
    }
}