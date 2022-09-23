const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {SchemaOptions} = require('./modeloptions');

const task = new Schema({
    _id: {
        type: Schema.Tasks.ObjectId,
        required: true,
        auto: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 50,
        default: 'New Card - Untitled'
    },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dueDate: {
        type: Date,
        default: null
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, SchemaOptions);

const Task = mongoose.model('Task', task);
exports.Task = Task;

