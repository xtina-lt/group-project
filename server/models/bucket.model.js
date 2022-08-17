const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Talk to me...📸'],
        minLength: [2, 'Tell me some more...📸']
    },
    comeplete: {
        type: Boolean,
    },
    creator : {
        type: String,
        required: [true]
    },
}, {timestamps: true} )

module.exports = mongoose.model('Bucket', Schema)