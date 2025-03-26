import bcrypt from 'bcrypt';

import { Schema, model } from "mongoose";

const userScema = new Schema({
    email: {
        type: String,
        required: true,
        minLength: [5, 'Email must be at least 10 characters long'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    username: {
        type: String,
        required: true,
        minLength: [3, 'Username must be at least 3 characters long'],
        maxLength: [20, 'Username cannot be longer than 20 characters']
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password must be at least 4 characters long']
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