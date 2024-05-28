import express, { Request, Response } from "express";

import userRouteController from "../controllers/userRouteController";

const router = express.Router();

// routes for /api/user
router.post("/", userRouteController.createCurrentUser);

export default router;
