const {healthInputEntryModel} = require('../models/healthInputEntry.model');

exports.getAllUserHealthInputEntries = function(req, res) {
  healthInputEntryModel.find({user_id:req.user._id}, function(err, healthInputEntries) {
    if (err) {
      res.send(err);
    } else if (healthInputEntries) {
      res.json(healthInputEntries);
    } else {
      res.status(400).send("Could not get healthInput Entries")
    }
  });
};

exports.getHealthInputEntry = function(req, res) {
  healthInputEntryModel.findOne({_id:req.params.healthInputEntryId, user_id: req.user._id}, 
    function(err, healthInputEntry) {
    if (err) {
      res.send(err);
    }
    res.json(healthInputEntry);
  });
};

exports.createHealthInputEntry = function(req, res) {
  const newhealthInputEntry = new healthInputEntry({...req.body}); 
  
  newhealthInputEntry.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateHealthInputEntry = function(req, res) {
  healthInputEntryModel.findOneAndUpdate(
    { _id: req.params.healthInputEntryId, user_id: req.user._id},
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
  healthInputEntryModel.deleteOne({ _id: req.params.healthInputEntryId, user_id: req.user._id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Entry has been deleted.' });
  });
};