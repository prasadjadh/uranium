const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const order1Schema = new mongoose.Schema( {
    user_id: {
        type: ObjectId,
        ref: "User1"
    },
    product_id: {
        type: ObjectId,
        ref: "Product1"
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Order1', order1Schema)