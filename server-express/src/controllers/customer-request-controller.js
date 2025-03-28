import { Router } from "express";
import mongoose from "mongoose";
import customerRequestService from "../services/customer-request-service.js";

const custromerRequestController = Router();

custromerRequestController.get('/', async (req, res) => {
    try {
        let requests;
        if(req.query.userId){
            const userId = req.query.userId;
            requests = await customerRequestService.getAll({userId});
        }
        else {
            requests = await customerRequestService.getAll();
        }
        res.status(200).json(requests);
    } catch (error) {
        res.status(400).json({error: error});
    }
});

custromerRequestController.get('/:requestId', async (req, res) => {
    const requestId = req.params.requestId;

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
        return res.status(400).json({ error: 'Invalid customer request ID' });
    }
    try {
        const request = await customerRequestService.getOne(requestId);
        res.status(200).json(request);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

custromerRequestController.post('/', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try{
        const requestData = req.body;

        const createdRequest = await customerRequestService.create(accessToken, requestData);
        res.status(201).json(createdRequest);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

custromerRequestController.patch('/:requestId', async (req, res) => {
    const requestId = req.params.requestId;
    const requestUpdateData = req.body;

    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
        return res.status(400).json({ error: 'Invalid requestId' });
    }

    try {
        
        const updatedRequest = await customerRequestService.update(accessToken, requestId, requestUpdateData);
        if (!updatedRequest) {
            return res.status(404).json({ error: 'Customer request not found' });
        }
        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

custromerRequestController.delete('/:requestId', async (req, res) => {
    const requestId = req.params.requestId;

    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
        await customerRequestService.delete(accessToken, requestId);
        res.status(200).json({});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

export default custromerRequestController;