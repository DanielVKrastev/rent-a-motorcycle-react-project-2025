import { Schema, Types, model } from "mongoose";

const motorcycleSchema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required'],
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
    },
    engine: {
        type: Number,
        min: 0,
    },
    power: {
        type: Number,
        min: 0,
    },
    maxSpeed: {
        type: Number,
        min: 0,
    },
    weight: {
        type: Number,
        min: 0,
    },
    category: {
        type: String,
    },
    year: {
        type: Number,
        min: 0,
    },
    tank: {
        type: Number,
        min: 0,
    },
    image: {
        type: String,
    },
    reservationCount: {
        type: Number
    },
    pricePerDay: {
        type: Number,
        required: true,
    },
    active: {
        type: String,
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Motorcycle = model('Motorcycle', motorcycleSchema);

export default Motorcycle;