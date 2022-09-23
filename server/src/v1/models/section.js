const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {SchemaOptions} = require('./modeloptions');

const SectionSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 50,
        default: 'New Section - Untitled'
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
}, SchemaOptions);

const Section = mongoose.model('Section', SectionSchema);
exports.Section = Section;