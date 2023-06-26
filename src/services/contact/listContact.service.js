const { Contact, User } = require("../../database/index");
const { AppError } = require("../../errors");
const { contactSchemaArray } = require("../../schemas/contact.schema");

const listContactService = async (userId) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not exists", 404);
  }

  const contacts = await Contact.findAll({
    where: {
      user_id: user.id,
    },
  });

  return contactSchemaArray.parse(contacts);
};

module.exports = { listContactService };
