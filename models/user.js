const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({

        unique_id: Number,
        username: String,
        email: String,
        address: String,
        phone_no: Number,
        password: String,
        passwordConf: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    });
    User = mongoose.model('User', userSchema);

module.exports = User;