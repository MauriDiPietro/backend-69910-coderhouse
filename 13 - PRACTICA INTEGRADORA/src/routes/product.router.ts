import { Router } from "express";
import * as controllers from "../controllers/product.controllers";
import {
  validateGetProduct,
  validatePostProduct,
} from "../middlewares/validators/product.validator";

const router = Router();
//@ts-ignore
router.get("/", controllers.getAll);
//@ts-ignore
router.post("/", [validatePostProduct], controllers.create);
//@ts-ignore
router.get("/:id", [validateGetProduct], controllers.getById);
//@ts-ignore
router.put("/",[validateGetProduct, validatePostProduct],controllers.update);
//@ts-ignore
router.delete("/", [validateGetProduct], controllers.remove);

export default router;
