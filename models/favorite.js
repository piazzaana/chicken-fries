const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    user:{type: Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Favorite',schema);