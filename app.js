const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/routes'); // Importa as rotas

require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch(err => console.error("Erro ao conectar ao MongoDB:", err.message));

// Usar as rotas
app.use('/', routes); // Isso garante que todas as rotas em routes.js serão usadas

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});
