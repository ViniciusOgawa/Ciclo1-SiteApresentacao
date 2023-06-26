const { Contact } = require("../database/index");
const { AppError } = require("../errors");

const ensureIsOwnerMiddleware = async (req, res, next) => {
  const contactId = req.params.id;
  const userId = req.customUser.id;

  const contact = await Contact.findOne({
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact.user_id !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

module.exports = { ensureIsOwnerMiddleware };
