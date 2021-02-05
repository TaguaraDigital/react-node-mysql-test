const express = require('express');
const router = express.Router();
const controllerPagos = require('../controllers/Pagos.controller')

router.post('/api/v1/recibos/stripe', controllerPagos.stripe); // cobro de recibos usando la pasarela de pago de stripe


module.exports = router;