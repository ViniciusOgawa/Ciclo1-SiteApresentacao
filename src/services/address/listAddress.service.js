const { Contact, Address } = require("../../database/index");
const { AppError } = require("../../errors");
const { addressSchema } = require("../../schemas/adress.schema");

const listAddressService = async (contactId) => {
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

  return addressSchema.parse(address);
};

module.exports = { listAddressService };
