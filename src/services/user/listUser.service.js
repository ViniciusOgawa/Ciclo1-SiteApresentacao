const { User } = require("../../database/index");
const { userSchemaArray } = require("../../schemas/users.schema");

const listUserService = async () => {
  const users = await User.findAll();
  const parsedUsers = userSchemaArray.parse(users);
  return parsedUsers;
};

module.exports = { listUserService };
