import { Router } from "express";
import colorsService from "../services/index.js";

const router = Router();

router.get("/", colorsService.getAllColors);
router.post("/", colorsService.createNewColor);
router.delete("/:id", colorsService.deleteColor)
router.put("/:id",colorsService.updateColor)



export { router as colorsRouter };