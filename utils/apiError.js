/* eslint-disable max-classes-per-file */
/**
 * Authentication Error
 * @class AuthenticationError
 * @extends {Error}
 */
class AuthenticationError extends Error {
  constructor(message = "AuthenticationError") {
    super(message);
    this.code = 401;
    this.message = message;
  }
}

/**
 * Internal Server Error
 * @class InternalServorError
 * @extends {Error}
 */
class InternalServorError extends Error {
  constructor(message = "InternalServorError") {
    super(message);
    this.code = 500;
    this.message = message;
  }
}

/**
 * Bad Request Error
 * @class BadRequestError
 * @extends {Error}
 */
class BadRequestError extends Error {
  constructor(message = "BadRequest") {
    super(message);
    this.code = 400;
    this.message = message;
  }
}

/**
 * ForbiddenError
 * @export
 * @class ForbiddenError
 * @extends {Error}
 */
class ForbiddenError extends Error {
  constructor(message = "ForbiddenError") {
    super(message);
    this.code = 403;
    this.name = message;
  }
}

/**
 * ActionNotAllowed
 *
 * @export
 * @class Not Found error
 * @extends {Error}
 */
class NotFoundError extends Error {
  constructor(message = "NotFoundError") {
    super(message);
    this.code = 404;
    this.message = message;
  }
}

/**
 * ValidationError
 *
 * @export
 * @class ValidationError
 * @extends {Error}
 */
class ValidationError extends Error {
  constructor(message = "ValidationError") {
    super(message);
    this.code = 422;
    this.message = "ValidationError";
  }
}
module.exports = {
  AuthenticationError,
  BadRequestError,
  ForbiddenError,
  ValidationError,
  NotFoundError,
  InternalServorError,
};
