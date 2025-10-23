import express from "express";
import * as authController from "../controllers/authController.js";
import * as profileController from "../controllers/profileController.js";
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router();

api.post('/register', authController.register);
api.post('/login', authController.login);

api.get('/me', protect, profileController.privateProfile);

export default api;