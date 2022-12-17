const mongoose = require('mongoose')

const friendsModel = new mongoose.Schema({
    _id : [
        {
            type: String,
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
}, {timestamps: true})

module.exports = mongoose.model("friends", friendsModel)