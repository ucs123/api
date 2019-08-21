require('../db/dbconfig');

let mongoose = require('mongoose');
var NavSchema = new mongoose.Schema({
  href: String,
  copy: String,
  target: String,
  icon: String,
  _id: Number,
  subnav: []
});

module.exports = mongoose.model('Nav', NavSchema);