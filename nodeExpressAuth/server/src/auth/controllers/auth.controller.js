const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
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

    // create JWT token
    const payload = { sub: createdUser.id, jti: uuid.v4() };
    const secret = process.env.JWT_SECRET;
    const options = {
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
      expiresIn: '2d'
    };

    const token = jwt.sign(payload, secret, options);
    return res.status(201).json({
      token,
      expiredIn: options.expiresIn
    });
  } catch (err) {
    res.status(500);
    if (err.name === VALIDATION_ERROR) res.status(400);

    return next(err);
  }
};
