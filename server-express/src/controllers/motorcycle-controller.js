import { Router } from "express";
import mongoose from "mongoose";
import multer from "multer";
import { uploadFile } from "../../config/googleDrive.js";
import motorcycleService from "../services/motorcycle-service.js";

const motorcycleController = Router();

const upload = multer({dest: 'uploads/'});

motorcycleController.get('/', async (req, res) => {
    try {
        let motorcycles;
        const { limit, active, where } = req.query;

        if (limit) {
            const parsedLimit = parseInt(limit);
            motorcycles = await motorcycleService.latestReservation(parsedLimit);
        }
        else if (active && !where) { 
            motorcycles = await motorcycleService.getActive(active);
        } 
        else if (where) {
            const whereFilter = {};

            // key=value&key2=value2
            const conditions = where.split('&');
            conditions.forEach(condition => {
                const [key, value] = condition.split('=');
                if (key && value) {
                    whereFilter[key] = value;
                }
            });

            // add active in whereFilter
            if (active) {
                whereFilter.active = active;
            }

            motorcycles = await motorcycleService.filterByConditions(whereFilter);
        } 

        else {
            motorcycles = await motorcycleService.getAll();
        }

        res.status(200).json(motorcycles);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

motorcycleController.get('/search/:searchParams', async (req, res) => {
    try {
        const searchParams = req.params.searchParams;

        if (!searchParams) {
            const motorcycles = await motorcycleController.get();
            return res.status(200).json(motorcycles);
        }

        const motorcycles = await motorcycleService.searchMotorcycle(searchParams);

        res.status(200).json(motorcycles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

motorcycleController.get('/:motorcycleId', async (req, res) => {
    const motorcycleId = req.params.motorcycleId;
    try {
        const motorcycle = await motorcycleService.getOne(motorcycleId);
        if (!motorcycle) {
            return res.status(200).json({}); 
        }
        res.status(200).json(motorcycle);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

motorcycleController.post('/', upload.single('image'), async (req, res) => {
    try{
        const motorcycleData = req.body;

        if (req.file) {
            const uploadedImageUrl = await uploadFile(req.file.path, req.file.originalname);
            console.log(uploadedImageUrl);
            
            motorcycleData.image = uploadedImageUrl; // Save public link in database
        }

        const createdMotorcycle = await motorcycleService.create(motorcycleData);
        res.status(201).json(createdMotorcycle);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

motorcycleController.patch('/:motorcycleId', upload.single('image'), async (req, res) => {
    const motorcycleId = req.params.motorcycleId;
    const motorcycleUpdateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(motorcycleId)) {
        return res.status(400).json({ error: 'Invalid motorcycleId' });
    }

    if (req.file) {
        const uploadedImageUrl = await uploadFile(req.file.path, req.file.originalname);
        console.log(uploadedImageUrl);
        
        motorcycleUpdateData.image = uploadedImageUrl; // Save public link in database
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