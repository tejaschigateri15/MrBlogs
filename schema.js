const mongoose = require('mongoose');
const schema = mongoose.Schema

// to create a schema
const blogschema = new schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })