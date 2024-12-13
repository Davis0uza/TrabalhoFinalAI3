const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const reservationRoutes = require('./routes/reservations');
const adminRoutes = require('./routes/admin');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/reservations', reservationRoutes);
app.use('/admin', adminRoutes);

// Servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
