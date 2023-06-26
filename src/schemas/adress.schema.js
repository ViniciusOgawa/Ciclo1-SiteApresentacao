const { z } = require("zod");

const addressSchema = z
  .object({
    state: z.string(),
    city: z.string(),
    number: z.string(),
    street: z.string(),
  })
  .partial();

module.exports = { addressSchema };
