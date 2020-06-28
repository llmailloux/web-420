/*
============================================
; Title:  api-catalog.js
; Author: Laurie Mailloux
; Date:   June 6 2020
; Description: part of api-gateway
;===========================================
*/

/**
/** API routes */

var express = require('express');
var checkToken = require('../check-token');
var router = express.Router();

var auth_controller =require('../controllers/authControllers');

//POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

// POST request for signing users in
router.post('/auth/login', auth_controller.user_login);

//get request for logging users out
router.get('/auth/logout', auth_controller.user_logout);



module.exports = router;