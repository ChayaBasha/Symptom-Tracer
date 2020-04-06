const symptomLog = require('../models/symptomLog.model');

exports.getAllSymptomLogs = function(req, res) {
  symptomLog.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getSymptomLog = function(req, res) {
  symptomLog.findById(req.params.symptomLogId, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createSymptomLog = function(req, res) {
  const newSymptomLog = new symptomLog({...req.body}); //if mongo validates properly this should work to get what was entered by the user when registering
  
  newSymptomLog.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateSymptomLog = function(req, res) {
  symptomLogId.findOneAndUpdate(
    { _id: req.params.SymptomLogId},
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
  symptomLog.deleteOne({ _id: req.params.SymptomLogId}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};