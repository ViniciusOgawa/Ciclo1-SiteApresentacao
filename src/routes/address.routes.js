const { Router } = require("express");
const { listAddressController } = require("../controllers/address.controller");
const {
  ensureTokenIsValid,
} = require("../middleware/ensureTokenIsValid.middleware");

const addressRoutes = Router();

addressRoutes.use(ensureTokenIsValid);

addressRoutes.get("/:id", listAddressController);

module.exports = addressRoutes;
