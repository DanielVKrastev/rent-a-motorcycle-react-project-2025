import Motorcycle from '../models/motorcycle-model.js';

export default {
    async create(motorcycleData) {
        const createdMotorcycle = await Motorcycle.create(motorcycleData);
        return createdMotorcycle;
    },
    async getAll(){
        const motorcycles = await Motorcycle.find().sort({ _id: -1 });
        return motorcycles;
    },
    async getOne(motorcycleId){
        const motorcycle = await Motorcycle.findOne({ _id: motorcycleId});
        return motorcycle;
    },
    async delete(motorcycleId){
        return await Motorcycle.findByIdAndDelete(motorcycleId);
    },
    async update(motorcycleId, updateData){
        const updateMotorcycle = await Motorcycle.findByIdAndUpdate(motorcycleId, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateMotorcycle);
    },
    async latestReservation(limit){
        try {
            return await Motorcycle.find()
                .sort({ reservationCount: -1 })  
                .limit(limit);           
        } catch (error) {
            throw error;
        }
    },
    async filterByConditions(whereFilter){
        try {
            return await Motorcycle.find(whereFilter)
                .sort({ _id: -1 })         
        } catch (error) {
            throw error;
        }
    }
}
