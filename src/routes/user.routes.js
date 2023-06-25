const { Router } = require("express");
const {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
  retriveUserController,
} = require("../controllers/user.controller");
const {
  ensureDataIsValid,
} = require("../middleware/ensureDataIsValid.middleware");
const {
  ensureUserExists,
} = require("../middleware/ensureUserExists.middleware");
const {
  ensureEmailExists,
} = require("../middleware/ensureEmailExists.middleware");
const {
  ensureTokenIsValid,
} = require("../middleware/ensureTokenIsValid.middleware");
const {
  ensureUserPermission,
} = require("../middleware/ensureUserPermission.middleware");
const {
  userSchemaRequest,
  userSchemaUpdate,
} = require("../schemas/users.schema");

const userRoutes = Router();

userRoutes.post(
  "",
  ensureEmailExists,
  ensureDataIsValid(userSchemaRequest),
  createUserController
);
userRoutes.get("", listUserController);
userRoutes.get("/profile", ensureTokenIsValid, retriveUserController);
userRoutes.patch(
  "/:id",
  ensureTokenIsValid,
  ensureUserPermission,
  ensureUserExists,
  ensureEmailExists,
  ensureDataIsValid(userSchemaUpdate),
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureTokenIsValid,
  ensureUserPermission,
  ensureUserExists,
  ensureDataIsValid(userSchemaUpdate),
  deleteUserController
);

module.exports = userRoutes;
