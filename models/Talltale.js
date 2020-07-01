const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TalltaleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Talltale = mongoose.model('talltale', TalltaleSchema);
module.exports = Talltale;