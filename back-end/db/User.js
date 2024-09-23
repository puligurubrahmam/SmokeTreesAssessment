const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    addresses: [{
        street: { type: String, required:true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip_code: { type: String, required: true }
    }]
});

module.exports = mongoose.model('users', userSchema);
