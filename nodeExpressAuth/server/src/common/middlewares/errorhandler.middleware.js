const notFound = ((req, res, next) => {
  const err = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(err);
});

// eslint-disable-next-line no-unused-vars
const errorHandler = ((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  const returnObject = {
    message: err.message
  };
  if (process.env.NODE_ENV !== 'production') returnObject.stack = err.stack;

  res.json(returnObject);
});

module.exports = {
  notFound,
  errorHandler
};
