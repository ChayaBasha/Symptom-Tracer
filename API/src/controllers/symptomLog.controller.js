const {symptomLogModel} = require('../models/symptomLog.model');

exports.getAllUserSymptomLogs = function(req, res) {
  symptomLogModel.find({user_id:req.user._id}, function(err, symptomLogs) {
    if (err) {
      res.send(err);
    } else if (symptomLogs) {
      res.json(symptomLogs);
    } else {
      res.status(400).send("Could not get Symptom Logs")
    }
  });
};

exports.getSymptomLog = function(req, res) {
  symptomLogModel.findOne({_id:req.params.symptomLogId, user_id: req.user._id}, 
    function(err, symptomLog) {
    if (err) {
      res.send(err);
    }
    res.json(symptomLog);
  });
};

exports.createSymptomLog = function(req, res) {
  const newSymptomLog = new symptomLogModel({...req.body, user_id: req.user._id}); 
  
  newSymptomLog.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
    console.log(JSON.stringify(data));
  });
};

exports.updateSymptomLog = function(req, res) {
  symptomLogModel.findOneAndUpdate(
    { _id: req.params.symptomLogId, user_id: req.user._id},
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

exports.deleteSymptomLog = function(req, res) {
  symptomLogModel.deleteOne({ _id: req.params.symptomLogId, user_id: req.user._id}, function(err) {
    if (err) {
      res.send(err);
    } else res.status(200).send('Log was deleted');
  });
};