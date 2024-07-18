import express, { Request, Response } from "express";

import userRouteController from "../controllers/userRouteController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

// routes for /api/user
router.post("/", jwtCheck, userRouteController.createCurrentUser);
router.get("/", jwtCheck, jwtParse, userRouteController.getCurrentUser);
router.put("/", jwtCheck, jwtParse, userRouteController.updateCurrentUser);

export default router;
