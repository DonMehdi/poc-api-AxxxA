/* eslint-disable no-throw-literal */
/* eslint-disable consistent-return */
exports.verification = async (req, res, next) => {
  try {
    // 1) check if the token is there
    let authorization;
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      ({ authorization } = req.headers);
      [, token] = authorization.split(" ");
    }
    if (!token) {
      throw { statusCode: 400 };
    }
    req.token = token;
    next();
  } catch (err) {
    next(err);
  }
};
