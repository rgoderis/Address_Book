const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contact = new Schema({
    lastName: String,
    firstName: String,
    email: String,
    phoneNumber: String,
    address: String,
    birthday: String,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'notes'
    }]
}, {collection: 'contacts'});

module.exports = mongoose.model('contacts', Contact);