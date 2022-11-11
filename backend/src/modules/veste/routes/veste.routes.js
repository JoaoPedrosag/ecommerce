import { Router } from "express";

import {
    listVestesController,
    createVesteController,
    findOneVesteController,
    updateVesteController,
    deleteVesteController,
    listVestesByShopNameController
} from "../controllers/index.js";

import AuthMiddleware from '../../../shared/middleware/AuthMiddleware.js';
import AllowsChangeMiddleware from '../../../shared/middleware/AllowsChangeMiddleware.js';

const vesteRoutes = Router();

vesteRoutes.post("/", AuthMiddleware, AllowsChangeMiddleware, (request, response) => {
    return createVesteController().handle(request, response);
});

vesteRoutes.get("/", (request, response) => {
    return listVestesController().handle(request, response);
});

vesteRoutes.get("/:id", (request, response) => {
    return findOneVesteController().handle(request, response);
});

vesteRoutes.get("/shop/:shop_name", (request, response) => {
    return listVestesByShopNameController().handle(request, response);
});

vesteRoutes.put("/:id", AuthMiddleware, AllowsChangeMiddleware, (request, response) => {
    return updateVesteController().handle(request, response);
});

vesteRoutes.delete("/:id", AuthMiddleware, AllowsChangeMiddleware, (request, response) => {
    return deleteVesteController().handle(request, response);
});

export { vesteRoutes };