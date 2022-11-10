import { Router } from "express";

import { authRoutes } from './user/routes/auth.routes.js';
import { computadoresRoutes } from "./computador/routes/computadores.routes.js";

const router = Router();

router.use('/auth', authRoutes);
router.use("/computador", computadoresRoutes);


export { router };
