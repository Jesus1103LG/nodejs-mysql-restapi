import { Router } from "express";
import { result } from "../controllers/index.controller.js";

const router = Router();

router.get("/", (req, res) => res.send("Home"));

router.get("/ping", result);

export default router;
