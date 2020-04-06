const healthInputLogController = require('../controllers/healthInputLog.controller');
const express = require('express');

const healthInputLogRoutes = express.Router();
// Routes if there is nothing added to the Path

healthInputLogRoutes
  .get('/', healthInputLogController.getAllHealthInputLogs) 
  .post('/', healthInputLogController.createHealthInputLog); 

healthInputLogRoutes
  .get('/:healthInputLogId', healthInputLogController.getHealthInputLog)
  .post('/:healthInputLogId', healthInputLogController.updateHealthInputLog)
  .delete('/:healthInputLogId', healthInputLogController.deleteHealthInputLog);

  module.exports = healthInputLogRoutes;
