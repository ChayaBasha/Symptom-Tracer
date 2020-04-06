const symptomEntry = require('../models/symptomEntry.model').symptomEntryModel;

exports.getAllSymptomEntries = function(req, res) {
  symptomEntry.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getSymptomEntry = function(req, res) {
  symptomEntry.findById(req.params.SymptomEntryId, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createSymptomEntry = function(req, res) {
  const newSymptomEntry = new symptomEntry({...req.body}); 
  
  newSymptomEntry.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateSymptomEntry = function(req, res) {
  SymptomEntryId.findOneAndUpdate(
    { _id: req.params.SymptomEntryId},
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

exports.deleteSymptomEntry = function(req, res) {
  symptomEntry.deleteOne({ _id: req.params.SymptomEntryId}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};