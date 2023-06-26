const { Router } = require("express");
const {
  ensureDataIsValid,
} = require("../middleware/ensureDataIsValid.middleware");
const {
  ensureTokenIsValid,
} = require("../middleware/ensureTokenIsValid.middleware");
const {
  ensureIsOwnerMiddleware,
} = require("../middleware/ensureIsOwner.middleware");
const {
  createContactController,
  listContactController,
  deleteContactController,
  updateContactController,
} = require("../controllers/contact.controller");
const { contactSchemaRequest } = require("../schemas/contact.schema");

const contactsRoutes = Router();

contactsRoutes.use(ensureTokenIsValid);

contactsRoutes.post(
  "",
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", listContactController);
contactsRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController);
contactsRoutes.patch("/:id", ensureIsOwnerMiddleware, updateContactController);

module.exports = contactsRoutes;
