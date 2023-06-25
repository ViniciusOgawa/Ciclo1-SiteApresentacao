const { User } = require("../database/index");
const { AppError } = require("../errors");

const ensureUserExists = async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  req.user = user;
  return next();
};

module.exports = { ensureUserExists };
