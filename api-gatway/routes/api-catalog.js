/** API routes */

var express = require('express');
var router = express.Router();

var auth_controller =require('../controllers/authControllers');

//POST requet for registering a user
router.post('/auth/register', auth_controller.user_register);

//GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_register);

module.exports = router;