import { Router } from "express";
import { getProducts } from "../controllers/productControllers";

const router = Router();

router.get("/products" , getProducts);

export default router;