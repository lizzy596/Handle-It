const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  plannedDueDate: Date,
  plannedStartDate: Date,
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
 },
  domain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Domain',
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
