import { Router } from "express";

import { authRoutes } from './user/routes/auth.routes.js';
import { vesteRoutes } from "./veste/routes/veste.routes.js";
import { imageRoutes } from './image/routes/image.routes.js'

const router = Router();

router.use('/auth', authRoutes);
router.use("/veste", vesteRoutes);
router.use("/image", imageRoutes);


export { router };
