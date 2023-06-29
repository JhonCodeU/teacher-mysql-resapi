export const success = (request, response, message, status) => {
  response.status(status || 200).send({
    error: '',
    body: message,
    status: status || 200
  });
}

export const error = (request, response, message, status, details) => {
  console.error('[Response Error]', message, details);
  response.status(status || 500).send({
    error: message,
    body: '',
    status: status || 500
  });
}