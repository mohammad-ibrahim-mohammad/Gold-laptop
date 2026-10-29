const globalErrorHandler = (err, req, res, next) => {
  console.error(err);

  let statusCode = 500;
  let message = "Something went wrong!.";

  switch (err.code) {
    case "42P01": // table not exist
      statusCode = 500;
      message = "Database table does not exist.";
      break;
    case "23505":
      statusCode = 500;
      message = "A resource with this value already exists.";
      break;
    case "42703":
      statusCode = 500;
      message = "Database column does not exist.";
      break;
    case "23503":
      statusCode = 400;
      message = "Referenced resource does not exist.";
      break;
    case "23502":
      statusCode = 400;
      message = "Required field is missing.";
      break;
    case "23514":
      statusCode = 400;
      message = "Invalid data.";
      break;
    case "22P02":
      statusCode = 400;
      message = "Invalid input.";
      break;
  }
  res.status(statusCode).json({
    status: statusCode >= 500 ? "error" : "fail",
    message,
  });
};

export default globalErrorHandler;
