var request = require('request');
var assert = require('chai').assert;

function checkStatus(url,statusCode){
	console.log(statusCode);
		request(url, function (error, response, body) {
			assert.equal(response.statusCode,statusCode,"Status Code not matching");
		});
}

module.exports = checkStatus;
	
	


  