const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller')

router.post('/login', controller.login); // un usuario
router.post('/create', controller.create); // incluir un usuario

router.get('/users/', controller.users);  //all users
router.get('/users/:email&:password', controller.user); // un usuario


module.exports = router;