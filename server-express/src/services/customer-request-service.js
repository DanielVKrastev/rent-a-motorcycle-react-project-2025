import { JWT_SECRET } from "../constants-config.js";
import jwt from 'jsonwebtoken';

import User from "../models/user-model.js";
import CustomerRequest from "../models/customer-request-model.js";

export default {
    async create(accessToken, customerRequestData) {

        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const user = await User.findById(decoded.id);

        customerRequestData.email = user.email;
        customerRequestData.userId = user.id;
        customerRequestData.date = new Date().toJSON();

        const createdRequest = await CustomerRequest.create(customerRequestData);

        return createdRequest;
    },
    async getAll(filter = {}){
        let filterFind = {};
        
        if(filter.userId){
            filterFind = filter;
        }
        
        const customerRequests = await CustomerRequest.find(filterFind).sort({ _id: -1 }) ;
        return customerRequests;
    },
    async getOne(customerRequestId){
        const customerRequest = await CustomerRequest.findOne({ _id: customerRequestId});
        return customerRequest;
    },
    async delete(accessToken, customerRequestId){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const user = await User.findById(decoded.id);
        
        if(user.role === 'User'){
            throw new Error('You are not a Admin');
        }

        return await CustomerRequest.findByIdAndDelete(customerRequestId);
    },
    async update(accessToken, customerRequestId, updateData){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const user = await User.findById(decoded.id);

        if(user.role === 'User'){
            throw new Error('You are not a Admin');
        }
        
        const updateRequest = await CustomerRequest.findByIdAndUpdate(customerRequestId, updateData, {new: true, runValidators: true });
        return updateRequest;
    },
}