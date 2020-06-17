const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location_data: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    rating: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Attraction = mongoose.model('attraction', AttractionSchema);

module.exports = Attraction;