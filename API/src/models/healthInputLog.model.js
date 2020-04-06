//imports 
const mongoose = require('mongoose');
const {healthInputEntrySchema} = require('./healthInputEntry.model');

const Schema = mongoose.Schema;

// Create our Helath Input Schema (this should match the front end object properies)
const healthInputLogSchema = new Schema({
  HealthInputLogName: {
      type: String,
      default: 'Unamed Health Input Log'
  },
  //I imported the schmea...according to mongoose docs, you should be able to create nested schemas using subdocuments 
  healthInputEntries: [healthInputEntrySchema],

  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('healthInputLog', healthInputLogSchema);