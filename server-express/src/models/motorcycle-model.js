import { Schema, model } from "mongoose";

const motorcycleSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
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
    active: {
        type: String,
    },
});

const Motorcycle = model('Motorcycle', motorcycleSchema);

export default Motorcycle;