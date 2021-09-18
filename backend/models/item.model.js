const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  description: { type: String, required: true },
  status: { type: String, required: true },
  finderName: { type: String, required: true },
  finderEmail: { type: String, required: true },
  uploadDate: { type: Date, required: true },
  owner: { type: String, default: 'Unknown'},
});

module.exports = mongoose.model('Entry', itemSchema);
