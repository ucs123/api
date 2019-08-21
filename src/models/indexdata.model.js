require('../db/dbconfig');

let mongoose = require('mongoose');
var IndexDataSchema = new mongoose.Schema({
    cname: String,
    nav_icon: String,
    nav_link: String,
    cdata: [],
    _id:Number
});

module.exports = mongoose.model('IndexData', IndexDataSchema);