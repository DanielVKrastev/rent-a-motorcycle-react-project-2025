import { Router } from "express";
import mongoose from "mongoose";
import motorcycleService from "../services/motorcycle-service.js";

const motorcycleController = Router();

motorcycleController.get('/', async (req, res) => {
    try {
        const motorcycles = await motorcycleService.getAll();
        res.status(200).json(motorcycles);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

motorcycleController.get('/:motorcycleId', async (req, res) => {
    const motorcycleId = req.params.motorcycleId;
    try {
        const motorcycle = await motorcycleService.getOne(motorcycleId);
        res.status(200).json(motorcycle);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

motorcycleController.post('/', async (req, res) => {
    const motorcycleData = req.body;

    try{
        const createdMotorcycle = await motorcycleService.create(motorcycleData);
        res.status(201).json(createdMotorcycle);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

motorcycleController.patch('/:motorcycleId', async (req, res) => {
    const motorcycleId = req.params.motorcycleId;
    const motorcycleUpdateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(motorcycleId)) {
        return res.status(400).json({ error: 'Invalid motorcycleId' });
    }

    try {
        const updatedMotorcycle = await motorcycleService.update(motorcycleId, motorcycleUpdateData);
        if (!updatedMotorcycle) {
            return res.status(404).json({ error: 'Motorcycle not found' });
        }
        res.status(200).json(updatedMotorcycle);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

motorcycleController.delete('/:motorcycleId', async (req, res) => {
    const motorcycleId = req.params.motorcycleId;
    try {
        await motorcycleService.delete(motorcycleId);
        res.status(200).json({});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

export default motorcycleController;