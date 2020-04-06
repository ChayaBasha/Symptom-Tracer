  
//imports 
const mongoose = require('mongoose');

//set up
const Schema = mongoose.Schema;

// Create our user Schema (this should match the front end object properies)
const userSchema = new Schema({
  firstName: {
      type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
    required: 'As user name is required to register',
    unique: true
  },
  password: {
    type: String,
    required: 'A password is required to register',

  },

});

module.exports = mongoose.model('User', userSchema);