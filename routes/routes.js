const express = require('express');
const router = express.Router();
const authController = require('../controller/Usercontroller');
const reservasController = require('../controller/ReservasController');
const salasController = require('../controller/Salascontroller');
const autenticarJWT = require('../middleware/authMiddleware'); // Importando middleware


router.post('/user/registro', authController.registrarUsuario); // DONE
router.post('/user/login', authController.loginUsuario); // DONE
router.post('/user/recuperar-senha', authController.recuperarSenha); // DONE

router.post('/salas/nova', autenticarJWT, salasController.criarSala); // DONE
router.put('/salas/editar', autenticarJWT, salasController.editarSala); // DONE
router.delete('/salas/remover', autenticarJWT, salasController.removerSala); //DONE
router.get('/salas', autenticarJWT, salasController.listarTodasSalas); //DONE


router.get('/reservas/consultar-por-sala', autenticarJWT, reservasController.consultaReservasPorSala); // DONE
router.get('/reservas/consultar-por-usuario', autenticarJWT, reservasController.consultaReservasPorUsuario); //DONE
router.post('/reservas/criar', autenticarJWT, reservasController.criarReserva); // DONE
router.put('/reservas/editar', autenticarJWT, reservasController.editarReserva); // DONE
router.delete('/reservas/cancelar', autenticarJWT,  reservasController.cancelarReserva); // DONE
router.get('/reservas', autenticarJWT, reservasController.listarTodasReservas); // DONE


module.exports = router;
