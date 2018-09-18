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

<<<<<<< HEAD
module.exports = mongoose.model('Lunch', schema);
=======
module.exports = mongoose.model('Lunch', schema);
>>>>>>> 0c69d38ae2f6030c503ad41f6b525b68fbf3efb6
