const mongoose = require('mongoose');
const schema = mongoose.Schema

// to create a schema
const blogschema = new schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    typeofblog: {
        type: String,
        required:true
    }

}, { timestamps: true })

//to model the schema
const Blog = mongoose.model('Blog', blogschema)
module.exports = Blog

//Test-NetConnection -ComputerName localhost -Port 3000
