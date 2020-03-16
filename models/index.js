const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Workouts = new Schema({
    day: {
        type: Date,
        default: ()=>new Date()
    },
    exercises: {
        type: Array,
        default: []
    }
})

const workout = mongoose.model('workout', Workouts)
module.exports = workout