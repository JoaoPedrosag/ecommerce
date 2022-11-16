import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt';
import { config } from '../../../config/index.js';
import AppError from '../../../shared/errors/AppError.js';

class LoginUserService {
    userRepository;

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ email, password }) {

        if (!email && !password) {
            throw new AppError('Email and password are required!');
        }

        const userAlreadyExist = await this.userRepository.findByEmail(email);
        if (!userAlreadyExist) {
            throw new AppError('User não existe');
        }

        const validPassword = await compare(password, userAlreadyExist.password);

        if (!validPassword) {
            throw new AppError('Invalid password');
        }

        try {
            const token = jwt.sign({ id: userAlreadyExist._id }, config.JWT_SECRET, {
                expiresIn: '1h'
            });
            return token;
        } catch (error) {
            throw new AppError(error, 500);
        }
    }
}

export { LoginUserService };