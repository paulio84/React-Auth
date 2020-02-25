exports.hasValidAuthFields = (req, res, next) => {
  const errors = [];

  if (req.body) {
    if (!req.body.email) {
      errors.push('Email is required.');
    }

    if (!req.body.password) {
      errors.push('Password is required.');
    }

    if (!errors.length) {
      return next();
    }
  } else {
    errors.push('Email and password required.');
  }

  res.status(400);
  return next(new Error(errors));
};
