const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {SchemaOptions} = require('./modeloptions');

const teamSchema = new Schema ({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
        default: 'Untitled'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    boards: [{
        type: Schema.Types.ObjectId,
        ref: 'Board'
    }],
}, SchemaOptions);

const Team = mongoose.model('Team', teamSchema);
exports.Team = Team;