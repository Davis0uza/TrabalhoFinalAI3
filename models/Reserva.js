const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    room_id: { type: String, required: true },
    user_id: { type: String, required: true },
    date: { type: String, required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    description: { type: String }
}); // Força o nome da coleção

module.exports = mongoose.model('Reserva', ReservaSchema);
