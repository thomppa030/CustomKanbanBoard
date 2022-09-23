const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {SchemaOptions} = require('./modeloptions');

const userSchema = new Schema ({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
        default: 'Untitled'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
        maxlength: 50,
        default: 'Untitled'
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100,
        default: 'Untitled'
    },
}, SchemaOptions);

const User = mongoose.model('User', userSchema);
exports.User = User;