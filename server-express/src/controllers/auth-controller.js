import { Router } from "express";
import authService from "../services/auth-service.js";
import { JWT_SECRET } from "../constants-config.js";
import jwt from 'jsonwebtoken';
import User from "../models/user-model.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const userData = req.body;

    try{
        const createdUser = await authService.register(userData);
        res.status(201).json(createdUser);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await authService.login(email, password);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

authController.post('/logout', async (req, res) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return res.status(200).json({ message: 'Logged out successfully' });
    }

    return res.status(200).json({ message: 'Logged out successfully' });
});

authController.get('/me', async (req, res) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No token, access denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ id: user._id, accessToken: user.accessToken, username: user.username, role: user.role });
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
});

export default authController;