import { Router } from "express";
import authService from "../services/auth-service.js";
import checkAuthorizationToken from "../middlewares/checkAuthorizationToken.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const userData = req.body;

    try{
        const createdUser = await authService.register(userData);
        res.status(201).json(createdUser);
    }catch(err){
        res.status(400).json(err.message);
    }
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await authService.login(email, password);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json(err.message);
    }
});

export default authController;