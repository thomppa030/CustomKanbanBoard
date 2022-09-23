const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {SchemaOptions} = require('./modeloptions');

const commentSchema = new Schema ({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 1000,
        default: 'Untitled'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
}, SchemaOptions);

const Comment = mongoose.model('Comment', commentSchema);
exports.Comment = Comment;