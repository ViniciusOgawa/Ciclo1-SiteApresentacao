const { User, Contact } = require("../database/index");
const { AppError } = require("../errors");

const ensureEmailExists = async (req, res, next) => {
  const userEmail = req.body.email;

  if (userEmail) {
    const findUser = await User.findOne({
      where: {
        email: userEmail,
      },
      paranoid: false,
    });

    if (findUser) {
      if (findUser.email === userEmail) {
        throw new AppError("Email already exists", 409);
      }
    }
  }

  return next();
};

module.exports = { ensureEmailExists };
