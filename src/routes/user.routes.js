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
  userSchemaRequest,
  userSchemaUpdate,
} = require("../schemas/users.schema");

const userRouter = Router();

userRouter.post(
  "",
  ensureEmailExists,
  ensureDataIsValid(userSchemaRequest),
  createUserController
);
userRouter.get("", listUserController);
userRouter.get("/:id", ensureUserExists, retriveUserController);
userRouter.patch(
  "/:id",
  ensureUserExists,
  ensureEmailExists,
  ensureDataIsValid(userSchemaUpdate),
  updateUserController
);
userRouter.delete(
  "/:id",
  ensureUserExists,
  ensureDataIsValid(userSchemaUpdate),
  deleteUserController
);

module.exports = userRouter;
