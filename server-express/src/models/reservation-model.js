import { Schema, Types, model } from "mongoose";

const reservationSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    licenseCategory: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
    },
    dateOrder: {
        type: Date
    },
    days: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    delivery: {
        type: String,
        enum: [
            'from Office',
            'from Airport',
            'from a Hotel',
        ],
    },
    bringBack: {
        type: String,
        enum: [
            'from Office',
            'from Airport',
            'from a Hotel',
        ],
    },
    passengerEquipment: {
        type: String,
    },
    passengerHelmet: {
        type: String,
    },
    emptyTank: {
        type: String,
    },
    paid: {
        type: String,
    },
    afterpay: {
        type: String,
    },
    totalPrice: {
        type: String,
        required: true
    },
    motorcycleId: {
        type: Types.ObjectId,
        ref: 'Motorcycle',
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
    }

});

const Reservation = model('Reservation', reservationSchema);

export default Reservation;