const { z } = require("zod");

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone_number: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
});

const userSchemaResponse = userSchema
  .extend({
    created_at: z.date().transform((val) => val.toISOString()),
    updated_at: z.date().transform((val) => val.toISOString()),
  })
  .omit({
    password: true,
  });

const userSchemaUpdate = userSchema.partial().omit({
  id: true,
});

const userSchemaArray = userSchemaResponse.array();

module.exports = {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdate,
  userSchemaArray,
};
