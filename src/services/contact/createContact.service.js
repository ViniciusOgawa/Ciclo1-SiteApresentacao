const { Contact, User, Address } = require("../../database/index");
const { AppError } = require("../../errors");
const { contactSchemaResponse } = require("../../schemas/contact.schema");

const createContactService = async (
  { email, phone_number, name, street, number, state, city },
  userId
) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not exists", 404);
  }

  console.log(number);

  const address = await Address.create({
    street,
    number,
    state,
    city,
  });

  const contact = await Contact.create({
    email,
    phone_number,
    name,
    user_id: user.id,
    address_id: address.id,
  });

  await address.save();
  await contact.save();

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

  return contactSchemaResponse.parse(result);
};

module.exports = {
  createContactService,
};
