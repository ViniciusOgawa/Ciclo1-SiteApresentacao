const { ZodError } = require("zod");

class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

const handleErrors = (err, req, res, _) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
      },
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      error: {
        message: err.flatten().fieldErrors,
      },
    });
  }

  console.log(err);

  return res.status(500).json({
    error: {
      message: "Internal server error",
    },
  });
};

module.exports = {
  AppError,
  handleErrors,
};
