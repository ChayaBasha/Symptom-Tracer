const symptomEntryController = require('../controllers/symptomEntry.controller');
const express = require('express');

const symptomEntryRoutes = express.Router();
// Routes if there is nothing added to the Path

symptomEntryRoutes
  .get('/', symptomEntryController.getAllUserSymptomEntries) 
  .post('/', symptomEntryController.createSymptomEntry); 

symptomEntryRoutes
  .get('/:symptomEntryId', symptomEntryController.getSymptomEntry)
  .post('/:symptomEntryId', symptomEntryController.updateSymptomEntry)
  .delete('/:symptomEntryId', symptomEntryController.deleteSymptomEntry);

module.exports = symptomEntryRoutes;