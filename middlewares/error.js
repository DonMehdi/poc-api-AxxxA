/* eslint-disable indent */
const {
  AuthenticationError,
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  ValidationError,
  InternalServorError,
} = require("../utils/apiError");

const getRightError = (statusCode, messageErr) => {
  switch (statusCode) {
    case 401:
      return new AuthenticationError(messageErr);
    case 404:
      return new NotFoundError(messageErr);
    case 400:
      return new BadRequestError(messageErr);
    case 403:
      return new ForbiddenError(messageErr);
    case 422:
      return new ValidationError(messageErr);
    default:
      return new InternalServorError(messageErr);
  }
};
// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, _next) => {
  const { statusCode, messageErr } = err;
  const { code, message } = getRightError(statusCode, messageErr);
  const response = {
    code,
    message,
  };
  res.status(response.code).json(response);
};
