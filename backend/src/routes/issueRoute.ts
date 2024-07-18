import express, { Request, Response } from "express";

import issueRouteController from "../controllers/issueRouteController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

// routes for /api/issue
router.post("/", jwtCheck, issueRouteController.createIssue);
router.get("/:id", jwtCheck, jwtParse, issueRouteController.getIssue);
router.get("/"), jwtCheck, jwtParse, issueRouteController.getAllIssues;
router.put("/:id", jwtCheck, jwtParse, issueRouteController.updateIssue);
router.delete("/:id", jwtCheck, jwtParse, issueRouteController.deleteIssue);

export default router;
