/**
 * fields username, password, and email
 */
//required modules
var mongoose= require ("mongoose");

//create user view model schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

//export view model
var User = module.exports = mongoose.model ("User", userSchema);

//add a new user to database
module.exports.add = (user, callback)=> {
    user.save(callback);
};
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    user.findById(query, callback);
};