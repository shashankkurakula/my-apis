const mongoose = require('mongoose')

const DrugsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  namesCode: {
    type: [String],
    required: true,
  },
  namesBrand: {
    type: [String],
    required: true,
  },
  namesGeneric: {
    type: String,
    required: true,
  },
  mechanismsOfAction: [
    {
      id: {
        type: String,
        required: true,
      },
      mechanism: {
        type: String,
        required: true,
      },
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Drugs = mongoose.model('drug', DrugsSchema)
