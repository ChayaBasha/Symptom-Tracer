//imports 
const mongoose = require('mongoose');
const {symptomEntrySchema} = require('./symptomEntry.model');

const Schema = mongoose.Schema;

// Create our symptom log Schema (this should match the front end object properies)
const symptomLogSchema = new Schema({
  symptomLogName: {
      type: String,
      default: 'Unamed Symptom Log'
  },
  symptomEntries: [symptomEntrySchema],
    
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

const symptomLogModel = mongoose.model('symptomLog', symptomLogSchema);
module.exports = {symptomLogModel, symptomLogSchema};