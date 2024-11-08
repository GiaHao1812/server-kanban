import { Router } from "express";
import register from "../controllers/userControllers";

const router = Router();

router.post("/register", register);

export default router;
