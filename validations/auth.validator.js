/* eslint-disable consistent-return */

const Joi = require("joi");

const schemaLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const loginValidation = (req, res, next) => {
  try {
    const { error } = schemaLogin.validate(req.body);
    // eslint-disable-next-line no-throw-literal
    if (error) throw { statusCode: 400, messageErr: "Wrong Credentials" };
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = loginValidation;
