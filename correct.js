let request = require('request');

console.log('--------- correct url ---------');
request('http://jd.com', function(error, response, body) {
  console.log("1. response.statusCode: " + response.statusCode);
  console.log("2. body (total length: " + body.length + ")" + ": " + body.substring(0,500) + "...");
});

