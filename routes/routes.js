const express = require('express');
const router = express.Router();
const authController = require('../controller/Usercontroller');
const reservasController = require('../controller/ReservasController');
const salasController = require('../controller/Salascontroller');

router.post('user/registro', authController.registrarUsuario);
router.post('user/login', authController.loginUsuario);
router.post('user/recuperar-senha', authController.recuperarSenha);

router.post('salas/nova', salasController.criarSala);
router.put('salas/editar', salasController.editarSala);
router.delete('salas/remover', salasController.removerSala);

router.get('reservas/consultar-por-sala', reservasController.consultaReservasPorSala);
router.get('reservas/consultar-por-usuario', reservasController.consultaReservasPorUsuario);
router.post('reservas/criar', reservasController.criarReserva);
router.put('reservas/editar', reservasController.editarReserva);
router.delete('reservas/cancelar', reservasController.cancelarReserva);

module.exports = router;
