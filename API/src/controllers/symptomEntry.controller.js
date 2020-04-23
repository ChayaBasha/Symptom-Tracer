const {symptomEntryModel} = require('../models/symptomEntry.model');

exports.getAllUserSymptomEntries = function(req, res) {
  symptomEntryModel.find({user_id:req.user._id}, function(err, symptomEntries) {
    if (err) {
      res.send(err);
    } else if (symptomEntries) {
      res.json(symptomEntries);
    } else {
      res.status(400).send("Could not get Symptom Entries")
    }
  });
};

exports.getSymptomEntry = function(req, res) {
  symptomEntryModel.findOne({_id:req.params.symptomEntryId, user_id: req.user._id}, 
    function(err, symptomEntry) {
    if (err) {
      res.send(err);
    }
    res.json(symptomEntry);
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
  symptomEntryModel.findOneAndUpdate(
    { _id: req.params.symptomEntryId, user_id: req.user._id},
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
  symptomEntryModel.deleteOne({ _id: req.params.symptomEntryId, user_id: req.user._id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};