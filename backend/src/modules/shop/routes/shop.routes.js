import { Router } from "express";

import {
    listShopNameController
} from "../controllers/index.js";

const shopRoutes = Router();

shopRoutes.get("/shops", (request, response) => {
    return listShopNameController().handle(request, response);
});

export { shopRoutes };
