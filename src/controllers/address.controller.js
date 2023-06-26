const {
  listAddressService,
} = require("../services/address/listAddress.service");

const listAddressController = async (req, res) => {
  const contactId = req.params.id;
  const address = await listAddressService(contactId);
  return res.json(address);
};

module.exports = { listAddressController };
