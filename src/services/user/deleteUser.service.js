const { User } = require("../../database/index");

const deleteUserService = async (idUser) => {
  const user = await User.findOne({
    where: {
      id: idUser,
    },
  });

  if (user) {
    await user.destroy();
  }
};

module.exports = { deleteUserService };
