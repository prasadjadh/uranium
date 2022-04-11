const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
     category: {
        type: String,
        enum: ["historical", "comic", "horror"] 
    },
    year: {
        type: String,
        unique: true,
        },
   
}, { timestamps: true });

module.exports = mongoose.model('bookUser', userSchema) //users



// String, Number
// Boolean, Object/json, array