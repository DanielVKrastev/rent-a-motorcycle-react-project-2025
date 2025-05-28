import { Router } from "express";
import mongoose from "mongoose";
import reservationService from "../services/reservation-service.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const reservationContoller = Router();

reservationContoller.get('/', async (req, res) => {
    try {
        let reservations;
        if (req.query.limit) {
            const limit = parseInt(req.query.limit);
            reservations = await reservationService.latestReservation(limit);
        } else if (req.query.userId) {
            const userId = req.query.userId;
            reservations = await reservationService.getAll({ userId });
        }
        else {
            reservations = await reservationService.getAll();
        }


        res.status(200).json(reservations);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

reservationContoller.get('/revenue', async (req, res) => {

    try {
        const revenue = await reservationService.revenue();
        if (revenue !== null) {
            res.json(revenue);
        } else {
            res.status(400).json({ err: 'Error calculating revenue' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

});

reservationContoller.get('/:reservationId', async (req, res) => {
    const reservationId = req.params.reservationId;

    if (!mongoose.Types.ObjectId.isValid(reservationId)) {
        return res.status(400).json({ error: 'Invalid reservation ID' });
    }
    try {
        const reservation = await reservationService.getOne(reservationId);
        res.status(200).json(reservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

reservationContoller.get('/motorcycle/:motorcycleId/dates', async (req, res) => {
    const { motorcycleId } = req.params;

    try {
        const dates = await reservationService.getMotorcycleDates(motorcycleId);
        res.status(200).json(dates);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

reservationContoller.post('/', async (req, res) => {
    try {
        const reservationData = req.body;

        const createdReservation = await reservationService.create(reservationData);
        res.status(201).json(createdReservation);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
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
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

reservationContoller.delete('/:reservationId', async (req, res) => {
    const reservationId = req.params.reservationId;
    try {
        await reservationService.delete(reservationId);
        res.status(200).json({});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default reservationContoller;