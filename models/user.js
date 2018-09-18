let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//create user schema
let UserSchema = new Schema({
    email:{type:String, required: true},
    password:{type:String, required: true},
});

//export model
module.exports = mongoose.model('User', UserSchema);