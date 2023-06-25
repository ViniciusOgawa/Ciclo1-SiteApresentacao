const bcrypt = require("bcryptjs");
const { User } = require("../../database/index");
const { userSchemaResponse } = require("../../schemas/users.schema");
const { AppError } = require("../../errors");

const createUserService = async ({ name, email, password, phone_number }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
    });

    return userSchemaResponse.parse(user);
  } catch (error) {
    console.error(error);
    throw new AppError("Failed to create user", 500);
  }
};

module.exports = { createUserService };
