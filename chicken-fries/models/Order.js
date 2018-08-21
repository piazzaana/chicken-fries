let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let OrderSchema = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
    }
);

//virtual for order's URL
OrderSchema.virtual('url').get(function () {
    return '/orders' + this._id;
});

//export model
module.exports = mongoose.model('Order', OrderSchema);