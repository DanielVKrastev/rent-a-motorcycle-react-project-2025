import { Router } from "express";
import mongoose from "mongoose";
import commentService from "../services/comment-service.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const commentController = Router();

commentController.get('/', async (req, res) => {
    try {
        let comments;
        if(req.query.motorcycleId){
            const motorcycleId = req.query.motorcycleId;
            comments = await commentService.getAll({motorcycleId});
        }else if(req.query.ownerId){
            const owner = req.query.ownerId;
            comments = await commentService.getAll({owner});
        }
        else {
            comments = await commentService.getAll();
        }
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({error: error});
    }
});

commentController.get('/:commentId', async (req, res) => {
    const commentId = req.params.commentId;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).json({ error: 'Invalid reservation ID' });
    }
    try {
        const comment = await commentService.getOne(commentId);
        res.status(200).json(comment);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

commentController.post('/', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try{
        const commentData = req.body;

        const createdComment = await commentService.create(accessToken, commentData);
        res.status(201).json(createdComment);
    }catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

commentController.patch('/:commentId', async (req, res) => {
    const commentId = req.params.commentId;
    const commentUpdateData = req.body;

    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).json({ error: 'Invalid commentId' });
    }

    try {
        
        const updatedReservation = await commentService.update(accessToken, commentId, commentUpdateData);
        if (!updatedReservation) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json(updatedReservation);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

commentController.delete('/:commentId', async (req, res) => {
    const commentId = req.params.commentId;

    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
        await commentService.delete(accessToken, commentId);
        res.status(200).json({});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

export default commentController;