const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://north-beta:QB8EY9eMLx7e8Rfe@north-beta.id6qt8j.mongodb.net/?retryWrites=true&w=majority&appName=North-Beta");
// Check if the model already exists, if not, define it
let PositionModel;
try {
    PositionModel = mongoose.model('position');
} catch (error) {
    console.log("Creating new 'position' model");
    PositionModel = mongoose.model('position', {
        title: String,
        location: String,
        responsibilities: String,
        qualifications: String,
        department: String,
        summary: String,
        link: String
    })
}

module.exports = PositionModel;
