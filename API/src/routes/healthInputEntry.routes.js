const healthInputEntryController = require('../controllers/healthInputEntry.controller');
const express = require('express');

const healthInputEntryRoutes = express.Router();
// Routes if there is nothing added to the Path

healthInputEntryRoutes
  .get('/', healthInputEntryController.getAllUserHealthInputEntries) 
  .post('/', healthInputEntryController.createHealthInputEntry); 

healthInputEntryRoutes
  .get('/:healthInputEntryId', healthInputEntryController.getHealthInputEntry)
  .post('/:healthInputEntryId', healthInputEntryController.updateHealthInputEntry)
  .delete('/:healthInputEntryId', healthInputEntryController.deleteHealthInputEntry);

module.exports = healthInputEntryRoutes;