require('../db/dbconfig');

let mongoose = require('mongoose');
var WeatherDataSchema = new mongoose.Schema({
    date: String,
    weather: String,
    weather_icon: String,
    temp: Number,
    temp_min: Number,
    temp_max: Number,
    air_speed:Number,
    pressure: Number,
    humidity: Number,
    city: String
});

module.exports = mongoose.model('WeatherData', WeatherDataSchema);