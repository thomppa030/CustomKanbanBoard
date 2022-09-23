const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {SchemaOptions} = require('./modeloptions');

const tagSchema = new Schema ({
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
    color: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
        default: 'blue'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, SchemaOptions);

const Tag = mongoose.model('Tag', tagSchema);
exports.Tag = Tag;
