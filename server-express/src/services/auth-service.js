import bcrypt from 'bcrypt';

import User from '../models/user-model.js';
import { generateToken } from '../utils/auth-unils.js';

export default {
    async register(userData) {
        
        if(userData.password !== userData.rePassword){
            throw new Error('Password mismatch');
        }

        const user = await User.findOne({ email: userData.email })
                                .select({ _id: true });
        
        if(user){
            throw new Error('User already exists');
        }

        const createdUser = await User.create({...userData, role: 'User'});

        const token = generateToken(createdUser);
        return { _id: createdUser._id, accessToken: token, email: createdUser.email, username: createdUser.username};
    },
    async login(email, password){
        const user = await User.findOne({email});
        if(! user){
            throw new Error('Invalid email');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if(! isValid){
            throw new Error('Invalid email');
        }

        const token = generateToken(user);
        return { _id: user._id, accessToken: token, email: user.email, username: user.username};
    },
    async getAll(){
        const users = await User.find();
        return users;
    },
    async getOne(userId){
        const users = await User.findOne({ _id: userId});
        return users;
    },
    async delete(userId){
        return await User.findByIdAndDelete(userId);
    },
    async update(userId, updateData){
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { runValidators: true });
        return this.getOne(userId);
    },
}
