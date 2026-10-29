function sendReq(res, statusCode, props) {
  res.status(statusCode).json({
    status: statusCode < 400 ? "success" : statusCode < 500 ? "fail" : "error",
    ...props,
  });
}
export default sendReq;
