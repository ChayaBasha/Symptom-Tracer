const symptomLogController = require('../controllers/symptomLog.controller');
const express = require('express');

const symptomLogRoutes = express.Router();
// Routes if there is nothing added to the Path

symptomLogRoutes
  .get('/', symptomLogController.getAllSymptomLogs) 
  .post('/', symptomLogController.createSymptomLog); 

symptomLogRoutes
  .get('/:symptomLogId', symptomLogController.getSymptomLog)
  .post('/:symptomLogId', symptomLogController.updateSymptomLog)
  .delete('/:symptomLogId', symptomLogController.deleteSymptomLog);

module.exports = symptomLogRoutes;