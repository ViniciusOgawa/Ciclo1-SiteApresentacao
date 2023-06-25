const { Router } = require("express");
const {
  ensureDataIsValid,
} = require("../middleware/ensureDataIsValid.middleware");
const { createTokenController } = require("../controllers/login.controller");
const { createTokenSchema } = require("../schemas/login.schema");

const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValid(createTokenSchema),
  createTokenController
);

module.exports = loginRoutes;
