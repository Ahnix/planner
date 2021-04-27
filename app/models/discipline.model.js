const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema(
    {
        id: Number,
        title: String,
        videos: Array,
        exercices: Array,
        archives: Array
    },
    { timestamps: true }
);

module.exports = disciplineSchema;