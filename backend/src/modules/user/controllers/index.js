import { UserRepository } from '../repositories/UserRepository.js';

import { LoginUserController } from './LoginUserController.js'
import { LoginUserService } from '../services/LoginUserService.js';

import { RegisterUserController } from './RegisterUserController.js';
import { RegisterUserService } from '../services/RegisterUserService.js';

const userRepository = new UserRepository();

const loginUserService = new LoginUserService(userRepository);
export function loginUserController() {
    const loginUserController = new LoginUserController(
        loginUserService
    );
    return loginUserController;
}

const registerUserService = new RegisterUserService(userRepository);
export function registerUserController() {
    const registerUserController = new RegisterUserController(
        registerUserService
    );
    return registerUserController;
}