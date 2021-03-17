const fetch = require("node-fetch");

const http = async (request) => {
  const response = await fetch(request.url, request.options);
  const data = await response.json();
  // eslint-disable-next-line no-throw-literal
  if (!response.ok) throw { statusCode: data.statusCode };
  return { status: data.statusCode, data };
};

module.exports = http;
