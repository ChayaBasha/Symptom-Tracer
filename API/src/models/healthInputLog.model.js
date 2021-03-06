//imports 
const mongoose = require('mongoose');
const { healthInputEntrySchema } = require('./healthInputEntry.model');

const Schema = mongoose.Schema;

// Create our Helath Input Schema (this should match the front end object properies)
const healthInputLogSchema = new Schema({
  HealthInputLogName: {
    type: String,
    default: 'Unamed Health Input Log'
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },
  //this ties the log to a particular user
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

const healthInputLogModel =  mongoose.model('healthInputLog', healthInputLogSchema);
module.exports = {healthInputLogModel, healthInputLogSchema};