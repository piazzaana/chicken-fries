const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//create user schema
let UserSchema = new Schema({
    email:{type:String, required: true},
    password:{type:String, required: true},
    //array of favorite ids
    //favorites:[{type: Schema.Types.ObjectId, ref:'Favorite'}]
});

UserSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

UserSchema.methods.validPassword = function(password){
    console.log(this);
    return bcrypt.compareSync(password, this.password);
};

//export model
module.exports = mongoose.model('User', UserSchema);