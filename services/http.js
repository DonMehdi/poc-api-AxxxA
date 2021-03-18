const fetch = require("node-fetch");

const http = async (request) => {
  const response = await fetch(request.uri, request.options);
  const data = await response.json();
  // eslint-disable-next-line no-throw-literal
  if (!response.ok) throw { statusCode: response.status };
  return data;
};

module.exports = http;
