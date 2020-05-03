const symptomLogController = require('../controllers/symptomLog.controller');
const express = require('express');

const symptomLogRoutes = express.Router();
// Routes if there is nothing added to the Path

symptomLogRoutes
  .get('/', symptomLogController.getAllUserSymptomLogs) 
  .post('/', symptomLogController.createSymptomLog); 

symptomLogRoutes
  .get('/:symptomLogId', symptomLogController.getSymptomLog)
  .put('/:symptomLogId', symptomLogController.updateSymptomLog)
  .delete('/:symptomLogId', symptomLogController.deleteSymptomLog);

module.exports = symptomLogRoutes;