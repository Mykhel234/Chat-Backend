const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    message: {
        type: String,
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
}, {timestamps: true});

module.exports = mongoose.model('message', messageModel);