const { User } = require("../../database/index");
const bcrypt = require("bcryptjs");
const { userSchemaResponse } = require("../../schemas/users.schema");

const updateUserService = async (userData, userId) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (userData.password) {
    userData.password = bcrypt.hashSync(userData.password, 10);
  }

  await user.update(userData);

  const updatedUser = userSchemaResponse.parse(user.toJSON());

  return updatedUser;
};

module.exports = { updateUserService };
