/* eslint-disable consistent-return */
/* eslint-disable no-throw-literal */
const Joi = require("joi");

const getClients = Joi.object({
  name: Joi.string(),
  limit: Joi.number().integer(),
});

const getClientsById = Joi.object({
  id: Joi.string().required(),
});

const getClientsValidation = (property) => (req, res, next) => {
  try {
    const { error } = getClients.validate(req[property]);
    if (error) throw { statusCode: 400 };
    return next();
  } catch (err) {
    next(err);
  }
};

const getClientsValidatioById = (property) => (req, res, next) => {
  try {
    const { error } = getClientsById.validate(req[property]);
    if (error) throw { statusCode: 400 };
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = { getClientsValidation, getClientsValidatioById };
