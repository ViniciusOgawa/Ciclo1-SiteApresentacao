const { User } = require("../../database/index");
const { userSchemaResponse } = require("../../schemas/users.schema");

const retriveUserService = async (userId) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  return userSchemaResponse.parse(user);
};

module.exports = {
  retriveUserService,
};
