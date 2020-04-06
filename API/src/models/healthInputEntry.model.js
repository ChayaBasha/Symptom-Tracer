//imports 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create our schema for entries of health inputs (this should match the front end object properies)
const healthInputEntrySchema = new Schema({
  inputDate: {
      type: Date,
      default: Date.now
  },
  entryBody: {
    type: String
  },
  symptomOnset: {
    type: [
        {
            type: String,
            enum: ['before', 'after', 'during', 'no relationship']
    }
        ],
  },
  
});

module.exports.healthInputEntrySchema = healthInputEntrySchema;
module.exports.healthInputEntryModel = mongoose.model('healthInputEntry', healthInputEntrySchema);