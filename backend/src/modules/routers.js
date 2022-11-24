import { Router } from "express";

import { authRoutes } from './user/routes/auth.routes.js';
import { vesteRoutes } from "./veste/routes/veste.routes.js";
import { imageRoutes } from './image/routes/image.routes.js';
import { shopRoutes } from './shop/routes/shop.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use("/veste", vesteRoutes);
router.use("/image", imageRoutes);
router.use("/shop", shopRoutes);


export { router };
