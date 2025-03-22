import { Router } from "express";
import mongoose from "mongoose";
import reservationService from "../services/reservation-service.js";

const reservationContoller = Router();

reservationContoller.get('/', async (req, res) => {
    try {
        const reservations = await reservationService.getAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

reservationContoller.get('/:reservationId', async (req, res) => {
    const reservationId = req.params.reservationId;
    try {
        const reservation = await reservationService.getOne(reservationId);
        res.status(200).json(reservation);
    } catch (error) {
        res.status(400).json({error: err.message});
    }
});

reservationContoller.post('/', async (req, res) => {
    try{
        const reservationData = req.body;

        const createdReservation = await reservationService.create(reservationData);
        res.status(201).json(createdReservation);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

reservationContoller.patch('/:reservationId', async (req, res) => {
    const reservationId = req.params.reservationId;
    const reservationUpdateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(reservationId)) {
        return res.status(400).json({ error: 'Invalid reservationId' });
    }

    try {
        const updatedReservation = await reservationService.update(reservationId, reservationUpdateData);
        if (!updatedReservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }
        res.status(200).json(updatedReservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

reservationContoller.delete('/:reservationId', async (req, res) => {
    const reservationId = req.params.reservationId;
    try {
        await reservationService.delete(reservationId);
        res.status(200).json({});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

export default reservationContoller;