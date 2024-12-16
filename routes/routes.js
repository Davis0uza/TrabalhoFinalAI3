const express = require('express');
const router = express.Router();
const authController = require('../controller/Usercontroller');
const reservasController = require('../controller/ReservasController');
const salasController = require('../controller/Salascontroller');
const autenticarJWT = require('../middleware/authMiddleware'); // Importando middleware


router.post('/user/registro', authController.registrarUsuario);
router.post('/user/login', authController.loginUsuario);
router.post('/user/recuperar-senha', authController.recuperarSenha);

router.post('/salas/nova', autenticarJWT, salasController.criarSala);
router.put('/salas/editar', autenticarJWT, salasController.editarSala);
router.delete('/salas/remover', autenticarJWT, salasController.removerSala);

router.get('/reservas/consultar-por-sala', autenticarJWT, reservasController.consultaReservasPorSala);
router.get('/reservas/consultar-por-usuario', autenticarJWT, reservasController.consultaReservasPorUsuario);
router.post('/reservas/criar', autenticarJWT, reservasController.criarReserva);
router.put('/reservas/editar', autenticarJWT, reservasController.editarReserva);
router.delete('/reservas/cancelar', autenticarJWT,  reservasController.cancelarReserva);

router.get('/reservas', autenticarJWT, reservasController.consultaReservasPorSala);


module.exports = router;
