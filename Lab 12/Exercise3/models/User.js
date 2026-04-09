const mongoose = require('mongoose');

// Schema definition
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String
});

// Model creation
const User = mongoose.model('User', userSchema);

module.exports = User;