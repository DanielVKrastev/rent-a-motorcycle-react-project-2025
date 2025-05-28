import { Schema, Types, model } from "mongoose";

const reservationSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    telephone: {
        type: String,
        maxLength: [15, 'Тelephone cannot be longer than 15 characters'],
        minLength: [8, 'Тelephone must be at least 8 characters long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minLength: [5, 'Email must be at least 5 characters long'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    licenseCategory: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: [true, 'Birthday is required'],
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
        type: Number,
    },
    afterpay: {
        type: Number,
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [
            'Pending',
            'Confirmed',
            'In progress',
            'Completed',
            'Canceled',
            'Rejected',
        ],
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