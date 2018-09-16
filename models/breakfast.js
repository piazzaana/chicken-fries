const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    imagePath:{type:String, required:true},
    name:{type:String, required:true},
    readyTime:{type:Number, required:true},
    servingSize:{type:Number,required:true},
    favorite:{type:Boolean, required:true},
    price:{type:Number, required:true},
});

module.exports = mongoose.model('Breakfast', schema);