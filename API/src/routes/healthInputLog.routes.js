const healthInputLogController = require('../controllers/healthInputLog.controller');
const express = require('express');

const healthInputLogRoutes = express.Router();
// Routes if there is nothing added to the Path

healthInputLogRoutes
  .get('/', healthInputLogController.getAllUserHealthInputLogs) 
  .post('/', healthInputLogController.createHealthInputLog); 

healthInputLogRoutes
  .get('/:healthInputLogId', healthInputLogController.getHealthInputLog)
  .put('/:healthInputLogId', healthInputLogController.updateHealthInputLog)
  .delete('/:healthInputLogId', healthInputLogController.deleteHealthInputLog);

  module.exports = healthInputLogRoutes;
