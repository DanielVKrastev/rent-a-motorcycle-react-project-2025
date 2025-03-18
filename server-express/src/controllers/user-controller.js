import { Router } from "express";
import authService from "../services/auth-service.js";
import checkAuthorizationToken from "../middlewares/checkAuthorizationToken.js";
import mongoose from "mongoose";

const userController = Router();

userController.get('/', checkAuthorizationToken, async (req, res) => {
    try {
        const users = await authService.getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

userController.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await authService.getOne(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

userController.patch('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const userUpdateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId' });
    }

    try {
        const updatedUser = await authService.update(userId, userUpdateData);
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error updating user' });
    }
});

userController.delete('/:userId', checkAuthorizationToken, async (req, res) => {
    const userId = req.params.userId;
    try {
        await authService.delete(userId);
        res.status(200).json({});
    } catch (error) {
        res.status(400).json(error.message);
    }
});

export default userController;