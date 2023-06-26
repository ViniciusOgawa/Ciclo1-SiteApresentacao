const ensureDataIsValid = (schema) => (req, res, next) => {
  console.log(req.body);
  const validatedData = schema.parse(req.body);
  req.body = validatedData;
  return next();
};

module.exports = { ensureDataIsValid };
