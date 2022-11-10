import { Router } from "express";

import { loginUserController, registerUserController } from '../controllers/index.js'

const authRoutes = Router();

authRoutes.post("/login", (request, response) => {
    return loginUserController().handle(request, response);
});

authRoutes.post("/register", (request, response) => {
    return registerUserController().handle(request, response);
});

export { authRoutes };