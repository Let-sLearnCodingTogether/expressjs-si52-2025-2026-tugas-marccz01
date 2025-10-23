import express from "express";
import * as authController from "../controllers/authController.js";
import * as plantController from "../controllers/plantController.js";

const api = express.Router();

api.post('/register', authController.register);
api.post('/login', authController.login);

api.post("/plant", plantController.createPlant);
api.get("/plant", plantController.listPlant);
api.put("/plant/:id", plantController.updatePlant);
api.delete("/plant/:id", plantController.deletePlant);

export default api;