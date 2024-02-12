const mongoose = require('mongoose');

const userWithOrdersSchema = new mongoose.Schema({
    name: String,
    email: String,
    orders: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        product: String,
        quantity: Number
    }]
});

exports.UserWithOrders = mongoose.model('UserWithOrders', userWithOrdersSchema);
