const { z } = require("zod");

const contactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
});

const contactSchemaRequest = contactSchema
  .omit({
    id: true,
  })
  .extend({
    street: z.string(),
    number: z.string(),
    state: z.string(),
    city: z.string(),
  });

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
  })
  .partial();

const contactSchemaResponse = contactSchema.extend({
  street: z.string(),
  number: z.string(),
  state: z.string(),
  city: z.string(),
  user_id: z.number(),
});

const contactSchemaArray = contactSchema
  .extend({
    address_id: z.number(),
  })
  .array();

module.exports = {
  contactSchema,
  contactSchemaArray,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
};
