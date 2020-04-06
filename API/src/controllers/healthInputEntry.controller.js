const healthInputEntry = require('../models/healthInputEntry.model').healthInputEntryModel;

exports.getAllHealthInputEntries = function(req, res) {
  helathInputEntry.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getHealthInputEntry = function(req, res) {
  helathInputLog.findById(req.params.healthInputEntryId, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createHealthInputEntry = function(req, res) {
  const newHealthInputEntry = new healthInputEntry({...req.body}); //if mongo validates properly this should work to get what was entered by the user when registering
  
  newHealthInputEntry.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateHealthInputEntry = function(req, res) {
  healthInputEntry.findOneAndUpdate(
    { _id: req.params.healthInputEntryId},
    req.body,
    { new: true },
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

exports.deleteHealthInputEntry = function(req, res) {
  helathInputEntry.deleteOne({ _id: req.params.healthInputEntryId}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};