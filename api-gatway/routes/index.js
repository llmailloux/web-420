/*
===========================================
; Title:  index.js
; Author: Professor Krasso
: Modified by: Laurie Mailloux
; Date:   June 6 2020
; Description: new file in gateway
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;