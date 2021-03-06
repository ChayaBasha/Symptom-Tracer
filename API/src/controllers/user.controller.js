const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { createToken, findByUserCredentials } = require('../services/auth.service');

const expiresIn = 3600;

exports.registerUser = async function (req, res) {
  const encryptPassword = await bcrypt.hash(req.body.password, 8);
  const newUser = new User({ ...(req.body), password: encryptPassword });
  const accessToken = await createToken(newUser, expiresIn);
  newUser.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res
        .header('access_token', accessToken)
        .send({
          auth: true,
          msg: 'Registered and logged in!',
          token_type: 'bearer',
          access_token: accessToken,
          expires_in: expiresIn
        });
    }
  });
};

exports.login = async function (req, res) {
  try {
    const user = await findByUserCredentials(req.body.userName, req.body.password);
    if (!user) {
      return res.status(400).send('Not a valid login/password');
    }
    const accessToken = await createToken(user, expiresIn);

    res
      .header('access_token', accessToken)
      .send({
        auth: true,
        msg: 'Logged in!',
        token_type: 'bearer',
        access_token: accessToken,
        expires_in: expiresIn
      });
  } catch (err) {
    console.log(err);
    res.status(400).send('Not a valid login/password');
  }
};

// exports.getUser = function (req, res) {
//   User.findById(req.params.userId, function (err, data) {
//     if (err) {
//       res.send(err);
//     } else if (data) {
//       const { userName } = data;
//       res.json({ userName });
//     } else {
//       res.status(400).send("No user")
//     }
//   });
// };

exports.updateUser = async function (req, res) {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
  }

  User.findOneAndUpdate(
    { _id: req.user._id },
    req.body,
    { new: true },
    function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send("there was a problem");
      } else {
        res.send('succesfully updated');
      }
    }
  );
};

exports.deleteUser = function (req, res) {
  User.deleteOne({ _id: req.user._id }, function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'User has been deleted.' });
  });
};

exports.logout = async function (req, res) {
  try {
    req.user.token = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({ success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};