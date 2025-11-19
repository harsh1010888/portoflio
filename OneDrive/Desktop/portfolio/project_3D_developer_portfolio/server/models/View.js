const mongoose = require('mongoose');

const ViewSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('View', ViewSchema);
