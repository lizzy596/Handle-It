const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  accessibility: {
    type: String,
    enum: ['Private', 'Public', 'Personal'],
    default: 'Private',
  },
},
  { timestamps: true },
);

const Domain = mongoose.model('Domain', domainSchema);

module.exports = Domain;