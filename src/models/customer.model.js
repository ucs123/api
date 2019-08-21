require('../db/dbconfig');

let mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Customer', CustomerSchema);