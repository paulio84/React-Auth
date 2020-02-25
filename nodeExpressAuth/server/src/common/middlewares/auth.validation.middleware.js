const jwt = require('jsonwebtoken');

exports.validTokenNeeded = (req, res, next) => {
  if (req.headers.authorization) {
    const authHeaders = req.headers.authorization.split(' ');
    if (authHeaders[0] === 'Bearer') {
      try {
        req.jwt = jwt.verify(authHeaders[1], process.env.JWT_SECRET);

        return next();
      } catch (err) {
        res.status(403);
        return next(err);
      }
    } else {
      return res.status(401).json({ message: 'You are not authorized.' });
    }
  } else {
    return res.status(401).json({ message: 'You are not authorized.' });
  }
};
