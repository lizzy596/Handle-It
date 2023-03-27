const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const taskSchema = mongoose.Schema(
  {
    taskName: String,
    taskDescription: {
      type: String,
      required: true,
    },
    totalHours: Number,
    plannedStartDate: Date,
    plannedEndDate: Date,
    completed: {
      type: Boolean,
      default: false,
    },
    taskOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    billable: {
      type: String,
      enum: ['billable', 'non-billable', 'n/a'],
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
taskSchema.plugin(toJSON);

/**
 * @typedef Task
 */
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;