const Joi = require("joi");

const schemaLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const loginValidation = (req, res, next) => {
  try {
    const { error } = schemaLogin.validate(req.body);
    if (error) throw { statusCode: 422 };
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = loginValidation;
