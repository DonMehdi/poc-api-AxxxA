/* eslint-disable consistent-return */
/* eslint-disable no-throw-literal */

const Joi = require("joi");

/**
 * @Schemas
 */
const getPoliciess = Joi.object({
  limit: Joi.number().integer(),
});

const getPoliciessById = Joi.object({
  id: Joi.string().required(),
});

/**
 * @Validators
 */
const getPoliciessValidation = (property) => (req, res, next) => {
  try {
    const { error } = getPoliciess.validate(req[property]);
    if (error) throw { statusCode: 400 };
    return next();
  } catch (err) {
    next(err);
  }
};

const getPoliciessValidationById = (property) => (req, res, next) => {
  try {
    const { error } = getPoliciessById.validate(req[property]);
    if (error) throw { statusCode: 400 };
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = { getPoliciessValidation, getPoliciessValidationById };
