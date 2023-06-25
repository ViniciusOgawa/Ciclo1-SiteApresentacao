const { AppError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const ensureTokenIsValid = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      throw new AppError(err.message, 401);
    }

    req.customUser = {
      id: +decoded.sub,
    };

    return next();
  });
};

module.exports = {
  ensureTokenIsValid,
};
