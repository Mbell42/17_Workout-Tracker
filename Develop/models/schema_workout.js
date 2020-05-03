// DEPENDENCIES
const mongoose = require("mongoose");


// WORKOUT SCHEMA
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "What is the name of new Workout?"
                }
            }
        ]
    }
)



// WORKOUT MODEL/COLLECTION



// MODELS
const WorkoutModel = mongoose.model("Workout", workoutSchema);


// EXPORTS
module.exports = WorkoutModel;
