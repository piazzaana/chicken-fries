const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    user:{type: Schema.Types.ObjectId, ref: 'User'},
    imagePath:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:Number, required:true},
});

module.exports = mongoose.model('Favorite',schema);