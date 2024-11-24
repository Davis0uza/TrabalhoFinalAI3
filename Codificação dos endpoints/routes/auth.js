const express = require('express');
const router = express.Router();

// Login do Utilizador
router.post('/login', (req, res) => {
    // Lógica para autenticação de utilizador
    res.send('Login realizado com sucesso!');
});

// Registo de Utilizador
router.post('/register', (req, res) => {
    // Lógica para registo de utilizador
    res.send('Utilizador registado com sucesso!');
});

// Recuperação de Palavra-Passe
router.post('/recover', (req, res) => {
    // Lógica para recuperação de senha
    res.send('Instruções de recuperação enviadas!');
});

module.exports = router;
