let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema =  new Schema({
    //set property names, datatypes and requirements
    name: String,
    username: {type: String, required: true, unique: true},
    password: String
});

userSchema.statics.findOneOrCreate = function findOneOrCreate(condition, doc, callback) {
    const self = this;
    self.findOne(condition, (err, result) => {
        return result
            ? callback(err, result)
            : self.create(doc, (err, result) => {
                return callback(err, result);
            });
    });
};

//export model
module.exports = mongoose.model('User', userSchema);