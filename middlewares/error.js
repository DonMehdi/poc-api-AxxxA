/* eslint-disable indent */
const {
  AuthenticationError,
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  ValidationError,
  InternalServorError,
} = require("../utils/apiError")

module.exports = (err, req, res) => {
  let { statusCode } = err
  console.log(err.statusCode)
  const { code, message } = getRightError(statusCode)

  const response = {
    code,
    message,
  }
  res.status(response.code).json(response)
}

const getRightError = (statusCode) => {
  switch (statusCode) {
    case 401:
      return new AuthenticationError()
    case 404:
      return new NotFoundError()
    case 400:
      return new BadRequestError()
    case 403:
      return new ForbiddenError()
    case 422:
      return new ValidationError()
    default:
      return new InternalServorError()
  }
}
