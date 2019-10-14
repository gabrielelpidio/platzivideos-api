const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  res.status(err.satus || 500);
  res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  errorHandler
};
