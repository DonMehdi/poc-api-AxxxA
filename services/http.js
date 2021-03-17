const fetch = require("node-fetch");
let http;
try {
  http = async (request) => {
    const response = await fetch(request.url, request.options);
    const data = await response.json();
    if (!response.ok) throw { statusCode: data.statusCode };
    return { status: data.statusCode, data };
  };
} catch (error) {
  throw error;
}
module.exports = http;
