const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  finderName: { type: String, required: true },
  finderEmail: { type: String, required: true },
  uploadDate: { type: Date, required: true },
});

module.exports = mongoose.model('Entry', itemSchema);
