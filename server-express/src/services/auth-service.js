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
        const userAddToken = await User.findByIdAndUpdate(createdUser._id, { runValidators: true })

        return { _id: userAddToken._id, accessToken: token, email: userAddToken.email, username: userAddToken.username, role: userAddToken.role};
    },
    async login(email, password){
        const user = await User.findOne({email});
        if(! user){
            throw new Error('Invalid email');
        }

        const accessToken = generateToken(user);

        const isValid = await bcrypt.compare(password, user.password);
        if(! isValid){
            throw new Error('Invalid email');
        }

        return { _id: user._id, accessToken: accessToken, email: user.email, username: user.username, role: user.role};
    },
    async getAll(){
        const users = await User.find();
        return users;
    },
    async getOne(userId){
        const user = await User.findOne({ _id: userId});
        return user;
    },
    async delete(userId){
        return await User.findByIdAndDelete(userId);
    },
    async update(userId, updateData){
        const user = await this.getOne(userId);
        
        if(updateData.email !== user.email){
            const userEmail = await User.find({email: updateData.email});
            
            if(userEmail.length > 0){
                throw new Error('This email is already taken');
            }
        }

        let newRole = user.role;
        if(updateData.role === "Admin"){
            newRole = "Admin";
        }

        const accessToken = generateToken({_id: userId, ...updateData, role: newRole});
        const updatedUser = await User.findByIdAndUpdate(userId, {...updateData, accessToken}, {new: true, runValidators: true });
        
        return this.getOne(updatedUser);
    },
}
