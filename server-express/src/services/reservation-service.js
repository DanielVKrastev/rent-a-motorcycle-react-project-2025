import Reservation from "../models/reservation-model";

export default {
    async create(reservationData) {
        const createdReservartion = await Reservation.create(reservationData);
        return createdReservartion;
    },
    async getAll(){
        const reservations = await Reservation.find();
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
}
