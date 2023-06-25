const { createTokenService } = require("../services/login/createToken.service");

const createTokenController = async (req, res) => {
  const { email, password } = req.body;
  const reponse = await createTokenService({ email, password });

  return res.json(reponse);
};

module.exports = { createTokenController };
