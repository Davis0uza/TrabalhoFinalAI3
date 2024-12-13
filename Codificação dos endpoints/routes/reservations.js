const express = require('express');
const router = express.Router();

// Criar Reserva
router.post('/', (req, res) => {
    // Lógica para criar uma reserva
    res.send('Reserva criada com sucesso!');
});

// Consultar Reservas
router.get('/', (req, res) => {
    // Lógica para listar todas as reservas
    res.send('Lista de reservas!');
});

// Editar Reserva
router.put('/:id', (req, res) => {
    // Lógica para editar uma reserva
    res.send(`Reserva com ID ${req.params.id} atualizada!`);
});

// Cancelar Reserva
router.delete('/:id', (req, res) => {
    // Lógica para cancelar uma reserva
    res.send(`Reserva com ID ${req.params.id} cancelada!`);
});

module.exports = router;
