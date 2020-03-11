const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const userModel = require('../../users/models/user.model');
const { VALIDATION_ERROR, NO_DOCUMENT_FOUND } = require('../../common/constants');

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
    await userModel.CreateUser(user);

    return res.sendStatus(201);
  } catch (err) {
    res.status(500);
    if (err.name === VALIDATION_ERROR) res.status(400);

    return next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // find the user by the email address
    const user = await userModel.FindByEmail(req.body.email);

    // if found, check the password
    const passwordsMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordsMatch) {
      res.status(401);
      return next(new Error('There was an error with this email and password combination.'));
    }

    // if ok, create the json web token and return to the user an OK
    const payload = { sub: user.id, jti: uuid.v4() };
    const secret = process.env.JWT_SECRET;
    const options = {
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
      expiresIn: '2d'
    };

    const token = jwt.sign(payload, secret, options);
    return res.status(200).json({
      token,
      expiresIn: options.expiresIn
    });
  } catch (err) {
    res.status(500);
    if (err.name === NO_DOCUMENT_FOUND) {
      res.status(401);
      err.message = 'There was an error with this email and password combination.';
    }

    return next(err);
  }
};
