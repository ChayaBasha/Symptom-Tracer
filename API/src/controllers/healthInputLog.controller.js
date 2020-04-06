const healthInputLog = require('../models/healthInputLog.model');

exports.getAllHealthInputLogs = function(req, res) {
  healthInputLog.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getHealthInputLog = function(req, res) {
  healthInputLog.findById(req.params.healthInputLogId, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createHealthInputLog = function(req, res) {
  const newHealthInputLog = new healthInputLog({...req.body}); //if mongo validates properly this should work to get what was entered by the user when registering
  
  newHealthInputLog.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateHealthInputLog = function(req, res) {
  healthInputLog.findOneAndUpdate(
    { _id: req.params.healthInputLogId},
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

exports.deleteHealthInputLog = function(req, res) {
  healthInputLog.deleteOne({ _id: req.params.healthInputLogId}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};