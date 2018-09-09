var assert = require('assert'); 
var fs = require('fs');
var request = require('request');
var url1 = require('url');
var url2 = require('url');
{
fs.writeFile('url', function myRequestFunc(url1, url2, cb) {
	url1 = 'https://www.google.com';
	url2 = 'https://www.gmail.com';
})
request('https://www.google.com', function(err, res) {
  if (err) { 
  return callback(err); 
  }
  callback(res.url1);
  response1 = callback.url1;
  })

request('https://www.gmail.com', function(err, res) {
  if (err) { 
  return callback(err); 
  }
  callback(res.url2);
  response2 = callback.url2;
  })

var callback = function(response1, response2, err) {
	assert.equal(response1, response2, 'these 2 are different urls');
	}

console.log('different urls');
}





