const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema(
    {
        videos: {
            idVideos: Array, 
            IDModelVestibular: {type: Number}
        },
        exercices: {
            idExercices:Array, 
            IDModelVestibular: {type: Number}
        },
        archives: {
            idArchives:Array, 
            IDModelVestibular: {type: Number}
                }
    }
);
module.exports = topicsSchema;