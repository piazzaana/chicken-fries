let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//create user schema
let UserSchema = new Schema({
<<<<<<< HEAD
    email:{type:String, required: true},
    password:{type:String, required: true},
=======
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String},
    password:{type:String},
});

//Virtual for user's full name
UserSchema.virtual('name').get(function () {
    return this.last_name + ', ' + this.first_name;
});

//Virtual for user's URL (profile)
UserSchema.virtual('url').get(function () {
    return '/user/' + this._id;
>>>>>>> 0c69d38ae2f6030c503ad41f6b525b68fbf3efb6
});

//export model
module.exports = mongoose.model('User', UserSchema);