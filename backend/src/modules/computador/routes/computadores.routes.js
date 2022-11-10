import { Router } from "express";

import {
    listComputadoresController,
    createComputadorController,
    findOneComputadorController,
    updateComputadorController,
    deleteComputadorController
} from "../controllers/index.js";

import AuthMiddleware from '../../../shared/middleware/AuthMiddleware.js'

const computadoresRoutes = Router();

computadoresRoutes.post("/", AuthMiddleware, (request, response) => {
    return createComputadorController().handle(request, response);
});

computadoresRoutes.get("/", (request, response) => {
    return listComputadoresController().handle(request, response);
});

computadoresRoutes.get("/:id", (request, response) => {
    return findOneComputadorController().handle(request, response);
});

computadoresRoutes.put("/:id", AuthMiddleware, (request, response) => {
    return updateComputadorController().handle(request, response);
});

computadoresRoutes.delete("/:id", AuthMiddleware, (request, response) => {
    return deleteComputadorController().handle(request, response);
});


export { computadoresRoutes };