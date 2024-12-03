import { Router } from "express";
import {
  register,
  login,
  loginWithGoogle,
  refreshToken,
} from "../controllers/userControllers";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google-login", loginWithGoogle);
router.get("/refresh-token" , refreshToken);

export default router;
