import { Schema, Types, model } from "mongoose";

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minLength: [5, 'Email must be at least 10 characters long'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    rating: {
        type: Number,
        required: true,
        min: [0, 'Rating must be at least 0'],
    },
    date: {
        type: Date
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
    motorcycleId: {
        type: Types.ObjectId,
        ref: 'Motorcycle',
    },
});

const Comment = model('Comment', commentSchema);

export default Comment;