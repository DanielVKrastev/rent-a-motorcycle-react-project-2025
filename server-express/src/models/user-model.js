import bcrypt from 'bcrypt';

import { Schema, model } from "mongoose";

const userScema = new Schema({
    email: {
        type: String,
        required: true,
        minLength: 10,
    },
    username: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    role: {
        type: String,
        required: true
    }
});

userScema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userScema);

export default User;