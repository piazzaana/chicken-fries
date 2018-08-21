let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema =  new Schema({
    //set property names, datatypes and requirements
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    created_at: Date,
    updated_at: Date
});

//Virtual for user's full name
userSchema.virtual('name').get(function () {
    return this.last_name + ', ' + this.first_name;
});

//Virtual for user's URL (profile)
userSchema.virtual('url').get(function () {
    return '/user/' + this._id;
});

//export model
module.exports = mongoose.model('User', userSchema);