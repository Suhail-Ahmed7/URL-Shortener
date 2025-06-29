const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    visits: {
        type: Number,
        default: 0
    },
    clickTimestamps: [
        {
            type: Date
        }
    ]
});

module.exports = mongoose.model('Url', urlSchema);
