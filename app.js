const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const authRoutes = require('./routes/routes');

app.use(express.json());
app.use('/api', authRoutes);

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error('Erro: A variável MONGO_URI não foi definida. Verifique o arquivo .env.');
    process.exit(1); 
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Conectado ao MongoDB!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err.message);
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});
