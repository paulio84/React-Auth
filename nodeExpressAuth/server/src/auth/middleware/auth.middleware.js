exports.hasValidAuthFields = (req, res, next) => {
  const errors = [];

  if (req.body) {
    if (!req.body.email) {
      errors.push('Email is required.');
    }

    if (!req.body.password) {
      errors.push('Password is required.');
    }

    if (errors.length) {
      return res.status(400).send({ errors: errors.join(',') });
    }

    return next();
  }

  return res.status(400).send({ errors: 'Email and password required.' });
};
