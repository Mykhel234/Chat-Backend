const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    sentMessage: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "messages"
    }],
    receivedMessage: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "messages"
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "friends",
    }],
    friendsRequest: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "friends",
    }],
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, {timestamp: true})

module.exports = mongoose.model("users", userModel)

// I think the required should be removed from both phone number and email cos one can be provided at the point of sign up, but adding reuired to them may force a user to input both rather than one.