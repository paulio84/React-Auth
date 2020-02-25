const bcrypt = require('bcrypt');
const userModel = require('../../users/models/user.model');
const { VALIDATION_ERROR } = require('../../common/constants');

exports.Register = async (req, res, next) => {
  const { email, password } = req.body;
  let { username } = req.body;

  try {
    // the username may not be supplied but is required by the User model.
    // so take it from the first part of the email if it's not supplied.
    if (!username) {
      [username] = email.split('@');
    }

    // hash the password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // create and store the user
    const user = {
      username,
      email,
      password: passwordHash
    };
    const createdUser = await userModel.CreateUser(user);
    console.log(createdUser);
  } catch (err) {
    res.status(500);
    if (err.name === VALIDATION_ERROR) res.status(400);

    return next(err);
  }

  return next();
};
