//mongoose creates structure for mongo. helps enforce rules

const mongoose = require('mongoose');

//schema is like a class and must be capitalized
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {type: String, required: true, unique: true},
        author: { type: String, required: true},
        published: {type: Date}
    }
);

module.exports = mongoose.model('book', bookSchema);