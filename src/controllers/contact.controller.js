const {
  createContactService,
} = require("../services/contact/createContact.service");
const {
  listContactService,
} = require("../services/contact/listContact.service");
const {
  deleteContactService,
} = require("../services/contact/deleteContact.service");
const {
  updateContactService,
} = require("../services/contact/updateContact.service");

const createContactController = async (req, res) => {
  const { email, phone_number, name, street, number, state, city } = req.body;

  const contact = await createContactService(
    { email, phone_number, name, street, number, state, city },
    req.customUser.id
  );

  return res.json(contact);
};

const listContactController = async (req, res) => {
  const userId = req.customUser.id;
  const contacts = await listContactService(userId);
  return res.json(contacts);
};

const deleteContactController = async (req, res) => {
  const idContact = req.params.id;

  await deleteContactService(idContact);

  return res.status(204).send();
};

const updateContactController = async (req, res) => {
  const data = req.body;
  const contactId = req.params.id;

  const updatedUser = await updateContactService(data, contactId);

  return res.json(updatedUser);
};

module.exports = {
  createContactController,
  listContactController,
  deleteContactController,
  updateContactController,
};
