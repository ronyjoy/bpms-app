const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userid: String,
    name: String,
    image: String,
    email: String
});


module.exports = mongoose.model('users', userSchema);