/*
;============================================
; Title:  user.js
; Author: Laurie Mailloux
; Date:   June 6 2020
; Description: part of api-gateway
;===========================================
/ *
/**
 * fields username, password, and email
 */
//required modules
var mongoose= require ("mongoose");

//create user view model schema

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

//export view model
const User = module.exports = mongoose.model("User", userSchema);

//add a new user to database
module.exports.add = (user, callback)=> {
    user.save(callback);
};
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};
