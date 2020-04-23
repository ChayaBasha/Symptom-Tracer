const {healthInputLogModel} = require('../models/healthInputLog.model');

exports.getAllUserHealthInputLogs = function(req, res) {
  healthInputLogModel.find({user_id:req.user._id}, function(err, healthInputLogs) {
    if (err) {
      res.send(err);
    } else if (healthInputLogs) {
      res.json(healthInputLogs);
    } else {
      res.status(400).send("Could not get healthInput Logs")
    }
  });
};

exports.getHealthInputLog = function(req, res) {
  healthInputLogModel.findOne({_id:req.params.healthInputLogId, user_id: req.user._id}, 
    function(err, healthInputLog) {
    if (err) {
      res.send(err);
    }
    res.json(healthInputLog);
  });
};

exports.createHealthInputLog = function(req, res) {
  const newhealthInputLog = new healthInputLog({...req.body}); 
  
  newhealthInputLog.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateHealthInputLog = function(req, res) {
  healthInputLogModel.findOneAndUpdate(
    { _id: req.params.healthInputLogId, user_id: req.user._id},
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
  healthInputLogModel.deleteOne({ _id: req.params.healthInputLogId, user_id: req.user._id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};