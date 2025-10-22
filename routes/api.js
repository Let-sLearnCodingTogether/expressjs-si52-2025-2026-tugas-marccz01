import express from "express"
import * as authController from "../controllers/authControllers.js";
import * as plantController from "../controllers/plantController.js";

const api = express.Router();

api.get("/plant", (req, res) => {});
api.post("/plant", (req, res) => {});
api.put("/plant/:id", (req, res) => {});
api.delete("/plant/:id", (req, res) => {});

export default api;