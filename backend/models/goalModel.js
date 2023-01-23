const mongoose = require('mongoose')


const goalSchema = mongoose.Schema({

    text: {
        type: String,
        required: [true, 'Input text']
    },
    day: {
        type: String,
        required: [true, 'Input text']
    },

    reminder: {
        type: Boolean,
        required: [false],
        default: [true],
    },

}, {
    timestamps: true
}

)
module.exports = mongoose.model('Goal', goalSchema)