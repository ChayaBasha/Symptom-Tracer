const {symptomEntryModel} = require('../models/symptomEntry.model');

exports.getAllSymptomEntries = function(req, res) {
  symptomEntryModel.find({symptomLog_id:req.params.symptomLogId}, function(err, symptomEntries) {
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
  symptomEntryModel.findOne({_id:req.params.symptomEntryId, symptomLog_id:req.params.symptomLogId}, 
    function(err, symptomEntry) {
    if (err) {
      res.send(err);
    }
    res.json(symptomEntry);
  });
};

exports.createSymptomEntry = function(req, res) {
  console.log('Ya Posted');
  
  const newSymptomEntry = new symptomEntryModel({...req.body, symptomLog_id:req.params.symptomLogId}); 
  
  newSymptomEntry.save(function(err, data) {
    // console.log(err,data);
    if(err && err.name === "ValidationError"){
      res.status(400).send(err)
    } else if (err) {
      console.log(err)
      res.status(500).send("There was an error");
    } else if(data) {
    res.json(data);
    } else {
      res.status(400).send("could not add Entry");
    }

  });
};

exports.updateSymptomEntry = function(req, res) {
  symptomEntryModel.findOneAndUpdate(
    { _id: req.params.symptomEntryId, symptomLog_id:req.params.symptomLogId},
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
  symptomEntryModel.deleteOne({ _id: req.params.symptomEntryId, symptomLog_id:req.params.symptomLogId}, function(err) {
    if (err) {
      res.send(err);
    }
    return res.status(200).send('Symptom Entry was delted');
  });
};