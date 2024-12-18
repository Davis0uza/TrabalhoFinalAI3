const mongoose = require('mongoose');

const SalaSchema = new mongoose.Schema({
    room_name: { type: String, required: true },
    capacity: { type: Number, required: true },
    equipment: { type: [String], required: true }
});

module.exports = mongoose.model('Sala', SalaSchema);
