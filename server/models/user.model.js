const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
	lastname: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
	age: {
        type: Number,
        required: [
            true,
            "Pages is required"
        ]
    } 
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
