const { AppError } = require("../errors");

const ensureUserPermission = async (req, res, next) => {
  const authenticatedUser = req.user;
  const id = req.params.id;

  if (id !== authenticatedUser.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

module.exports = {
  ensureUserPermission,
};
