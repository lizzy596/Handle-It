const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const appErrorSchema = mongoose.Schema(
  {
    ip: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    platform: {
      type: String,
    },
    topic: {
      type: String,
      default: 'default',
    },
    action: {
      type: String,
      required: true,
    },
    payload: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
appErrorSchema.plugin(toJSON);
appErrorSchema.plugin(paginate);

/**
 * Return paths to text search in paginate plugin
 * @returns {Array<string>}
 */
appErrorSchema.statics.searchableFields = function () {
  return ['ip', 'platform', 'topic', 'action', 'payload'];
};

/**
 * @typedef AppError
 */
const AppError = mongoose.model('AppError', appErrorSchema);

module.exports = AppError;