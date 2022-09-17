const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {SchemaOptions} = require('./modeloptions');

const BoardSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
        maxlength: 50,
        default: 'New Board - Untitled'
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100,
        default: `Add Description here
        🟢 multiline descriptions are allowed',
        🟢 Let's make this board awesome!`,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    team:{
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    sections: [{
        type: Schema.Types.ObjectId,
        ref: 'List'
    }],
    labels: [{
        type: Schema.Types.ObjectId,
        ref: 'Label'
    }],
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    archived: {
        type: Boolean,
        default: false
    }
}, SchemaOptions);
