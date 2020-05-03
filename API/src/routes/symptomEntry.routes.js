const symptomEntryController = require('../controllers/symptomEntry.controller');
const express = require('express');

const symptomEntryRoutes = express.Router({mergeParams: true});
// Routes if there is nothing added to the Path

symptomEntryRoutes
  .get('/', symptomEntryController.getAllSymptomEntries) 
  .post('/', symptomEntryController.createSymptomEntry); 

symptomEntryRoutes
  .get('/:symptomEntryId', symptomEntryController.getSymptomEntry)
  .put('/:symptomEntryId', symptomEntryController.updateSymptomEntry)
  .delete('/:symptomEntryId', symptomEntryController.deleteSymptomEntry);

module.exports = symptomEntryRoutes;



