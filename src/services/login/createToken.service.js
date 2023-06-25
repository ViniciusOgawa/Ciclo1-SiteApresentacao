const { AppError } = require("../../errors");
const bcrypt = require("bcryptjs");
const { User } = require("../../database/index");
const jwt = require("jsonwebtoken");
const { userSchemaResponse } = require("../../schemas/users.schema");

const createTokenService = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign({ userName: user.name }, process.env.SECRET_KEY, {
    expiresIn: "1h",
    subject: String(user.id),
  });

  const response = {
    token: token,
    user: userSchemaResponse.parse(user),
  };

  return response;
};

module.exports = {
  createTokenService,
};
