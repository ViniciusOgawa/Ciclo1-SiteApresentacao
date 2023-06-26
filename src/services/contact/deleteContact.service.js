const { Contact, Address } = require("../../database/index");
const { AppError } = require("../../errors");

const deleteContactService = async (contactId) => {
  const contact = await Contact.findOne({
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    throw new AppError("Contact not exists", 404);
  }

  const address = await Address.findOne({
    where: {
      id: contact.address_id,
    },
  });

  contact.destroy();
  address.destroy();
};

module.exports = { deleteContactService };
