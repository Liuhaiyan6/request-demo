let request = require('request');

request('http://non-exist-site.com', function(error, response, body) {
  console.log('1. error: ' + error);
});