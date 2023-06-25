const { z } = require("zod");

const createTokenSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

module.exports = { createTokenSchema };
