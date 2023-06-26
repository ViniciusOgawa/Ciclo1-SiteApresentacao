const { Contact, Address } = require("../../database/index");
const { contactSchemaUpdate } = require("../../schemas/contact.schema");
const { addressSchema } = require("../../schemas/adress.schema");
const { AppError } = require("../../errors");

const updateContactService = async (data, contactId) => {
  const contact = await Contact.findOne({
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  const address = await Address.findOne({
    where: {
      id: contact.address_id,
    },
  });

  const addressData = addressSchema.parse(data);

  const contactData = contactSchemaUpdate.parse(data);

  await contact.update(contactData);
  await address.update(addressData);

  const result = {
    id: contact.dataValues.id,
    email: contact.dataValues.email,
    phone_number: contact.dataValues.phone_number,
    name: contact.dataValues.name,
    street: address.dataValues.street,
    number: address.dataValues.number,
    state: address.dataValues.state,
    city: address.dataValues.city,
    user_id: contact.dataValues.user_id,
  };

  return result;
};

module.exports = { updateContactService };
