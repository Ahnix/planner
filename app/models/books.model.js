const mongoose = require('mongoose');
const topicsSchema = require('./topics.model');

const booksSchema = new mongoose.Schema(
    {
            title:{type: String},
            content:[topicsSchema]
    }
);

module.exports = booksSchema;