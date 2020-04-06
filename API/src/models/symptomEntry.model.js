//imports 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create our symptom etnry schema (this should match the front end object properies)
const symptomEntrySchema = new Schema({
  symptomOnset: {
      type: Date,
      default: Date.now
  },

  symptomDescription: {
      type: String,
      required: true
  },

  symptomDuration: {
      type: Number
  },

  symptomSeverity: {
      type: [{
          type: Number,
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }]
  },

});

module.exports.symptomEntrySchema = symptomEntrySchema;
module.exports.symptomEntryModel = mongoose.model('symptomEntry', symptomEntrySchema); 
