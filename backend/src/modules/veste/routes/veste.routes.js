import { Router } from "express";

import {
    listVestesController,
    createVesteController,
    findOneVesteController,
    updateVesteController,
    deleteVesteController
} from "../controllers/index.js";

import AuthMiddleware from '../../../shared/middleware/AuthMiddleware.js'

const vesteRoutes = Router();

vesteRoutes.post("/", AuthMiddleware, (request, response) => {
    return createVesteController().handle(request, response);
});

vesteRoutes.get("/", (request, response) => {
    return listVestesController().handle(request, response);
});

vesteRoutes.get("/:id", (request, response) => {
    return findOneVesteController().handle(request, response);
});

vesteRoutes.put("/:id", AuthMiddleware, (request, response) => {
    return updateVesteController().handle(request, response);
});

vesteRoutes.delete("/:id", AuthMiddleware, (request, response) => {
    return deleteVesteController().handle(request, response);
});


export { vesteRoutes };