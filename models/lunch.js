const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    imagePath:{type: String},
    name:{type: String},
    description:{type: String},
    readyTime:{type: Number},
    servingSize:{type: Number},
    favorite:{type: Boolean},
    price:{type: Number}
});

module.exports = mongoose.model('LunchItem', schema);