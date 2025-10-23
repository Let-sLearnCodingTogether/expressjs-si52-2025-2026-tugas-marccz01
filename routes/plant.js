import express from "express"
import * as plantController from "../controllers/plantController.js";
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router();

api.post("/plant", protect, plantController.createPlant);
api.get("/plant", protect, plantController.listPlant);
api.put("/plant/:id", protect, plantController.updatePlant);
api.delete("/plant/:id", protect, plantController.deletePlant);

export default api;