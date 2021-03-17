const Joi = require("joi");

const getClients = Joi.object({
  name: Joi.string().required(),
  limit: Joi.number().integer().required(),
});

const getClientsById = Joi.object({
  id: Joi.string().required(),
});

const getClientsValidation = (property) => (req, res, next) => {
  try {
    const { error } = getClients.validate(req[property]);
    if (error) throw { statusCode: 422 };
    return next();
  } catch (err) {
    next(err);
  }
};

const getClientsValidatioById = (property) => (req, res, next) => {
  try {
    const { error } = getClientsById.validate(req[property]);
    if (error) throw { statusCode: 422 };
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = { getClientsValidation, getClientsValidatioById };
