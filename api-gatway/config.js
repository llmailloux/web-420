/*
============================================
; Title:  config.js
; Author: Laurie Mailloux
; Date:   June 6 2020
; Description: new file in api-gateway
;===========================================
*/
var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';

module.exports = config;
