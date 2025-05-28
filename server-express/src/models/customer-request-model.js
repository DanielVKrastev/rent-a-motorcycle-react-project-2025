import { Schema, Types, model } from "mongoose";

const customerRequestSchema = new Schema({
    theme: {
        type: String,
        required: [true, 'Theme is required'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minLength: [5, 'Email must be at least 5 characters long'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    date: {
        type: Date,
        default: Date.now,
    },
    response: {
        type: String,
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const CustomerRequest = model('Customer-Request', customerRequestSchema);

export default CustomerRequest;