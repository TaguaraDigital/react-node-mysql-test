const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller')

router.get('/users/:email&:password', controller.user); // un usuario
router.post('/login', controller.login); // un usuario

router.get('/users/', controller.users);  //all users

router.post('/users', controller.register); // incluir un usuario

module.exports = router;