const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', Note);