/**
 *  Product Routers
 */

import { Router } from "express";
// Import methods
import { methods as getProductController } from "../controllers/ProductControllers.js";

const router = Router();

//Routes

//http://localhost:4000/api/app     (GET)
router.get("/", getProductController.GetProduct);

//
router.post("/", getProductController.PostProduct);

// Export Router
export default router;