const express = require('express');
const router = express.Router();

// Adicionar Sala
router.post('/rooms', (req, res) => {
    // Lógica para adicionar uma nova sala
    res.send('Sala adicionada com sucesso!');
});

// Editar Sala
router.put('/rooms/:id', (req, res) => {
    // Lógica para editar uma sala
    res.send(`Sala com ID ${req.params.id} atualizada!`);
});

// Remover Sala
router.delete('/rooms/:id', (req, res) => {
    // Lógica para remover uma sala
    res.send(`Sala com ID ${req.params.id} removida!`);
});

// Gestão de Perfis de Utilizador
router.put('/users/:id', (req, res) => {
    // Lógica para editar permissões de utilizador
    res.send(`Perfil do utilizador com ID ${req.params.id} atualizado!`);
});

module.exports = router;
