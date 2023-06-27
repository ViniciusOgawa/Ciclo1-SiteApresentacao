const { AppError } = require("../errors");

const ensureUserPermission = async (req, res, next) => {
  const authenticatedUser = req.customUser;
  const id = Number(req.params.id);

  if (id !== authenticatedUser.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

module.exports = {
  ensureUserPermission,
};
