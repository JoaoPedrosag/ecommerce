import { genSalt, hash } from "bcrypt";
import AppError from "../../../shared/errors/AppError.js";

class RegisterUserService {
    userRepository;

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ name, email, password, admin, shop_name }) {

        if (!email && !password && !name) {
            throw new AppError('Email, name and password are required!');
        }

        const userAlreadyExist = await this.userRepository.findByEmail(email);
        if (userAlreadyExist) {
            throw new AppError('Já existe um user com esse email');
        }

        if (!admin) {
            admin = false;
        }

        const salt = await genSalt(12);
        password = await hash(password, salt);

        return await this.userRepository.create({ name, email, password, admin, shop_name });
    }
}

export { RegisterUserService };