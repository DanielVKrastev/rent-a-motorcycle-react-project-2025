import { JWT_SECRET } from "../constants-config.js";
import jwt from 'jsonwebtoken';

import User from "../models/user-model.js";
import Comment from "../models/comment-model.js";

export default {
    async create(accessToken, commentData) {

        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const user = await User.findById(decoded.id);

        commentData.email = user.email;
        commentData.owner = user.id;
        commentData.date = new Date().toJSON();

        const createdComment = await Comment.create(commentData);

        return createdComment;
    },
    async getAll(filter = {}){
        let filterFind = {};
        
        
        if(filter.motorcycleId){
            filterFind = filter;
        }

        if(filter.owner){
            filterFind = filter;
        }
        
        const comments = await Comment.find(filterFind).sort({ _id: -1 }) ;
        return comments;
    },
    async getOne(commentId){
        const comment = await Comment.findOne({ _id: commentId});
        return comment;
    },
    async delete(accessToken, commentId){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const user = await User.findById(decoded.id);

        const comment = await this.getOne(commentId);
        
        if(user._id.toString() !== comment.owner.toString() && user.role === 'User'){
            throw new Error('You are not a owner');
        }

        return await Comment.findByIdAndDelete(commentId);
    },
    async update(accessToken, commentId, updateData){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const user = await User.findById(decoded.id);

        const comment = await this.getOne(commentId);

        if(user._id.toString() !== comment.owner.toString()){
            throw new Error('You are not a owner');
        }
        
        const updateComment = await Comment.findByIdAndUpdate(commentId, updateData, {new: true, runValidators: true });
        return updateComment;
    },
}