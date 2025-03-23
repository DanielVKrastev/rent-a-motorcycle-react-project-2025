import Reservation from "../models/reservation-model.js";

export default {
    async create(reservationData) {
        const createdReservartion = await Reservation.create(reservationData);
        return createdReservartion;
    },
    async getAll(){
        const reservations = await Reservation.find().sort({ _id: -1 }) ;
        return reservations;
    },
    async getOne(reservationId){
        const reservation = await Reservation.findOne({ _id: reservationId});
        return reservation;
    },
    async delete(reservationId){
        return await Reservation.findByIdAndDelete(reservationId);
    },
    async update(reservationId, updateData){
        const updateReservation = await Reservation.findByIdAndUpdate(reservationId, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateReservation);
    },
    async revenue(){
        try {
            const revenue = await Reservation.aggregate([
                {
                    $match: {
                        status: { $in: ['Completed', 'Confirmed'] },
                    },
                },
                {
                    $group: {
                        _id: null, 
                        totalRevenue: { $sum: '$totalPrice' }, 
                    },
                },
            ]);

            if (revenue.length === 0) {
                return 0; 
            }
    
            return revenue[0].totalRevenue;
        } catch (error) {
            return error; 
        }
    },
    async latestReservation(limit){
        try {
            return await Reservation.find()
                .sort({ dateOrder: -1 })  
                .limit(limit);           
        } catch (error) {
            throw error;
        }
    }
}