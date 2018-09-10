var assert = require('assert'); 
var fs = require('fs');
var request = require('request');

var url1 =  'https://www.google.com';
var url2 = 'https://www.gmail.com';


fs.writeFile('url', function myRequestFunc(url1, url2, cb) {

request('url1', function(err, res) {
  if (err) { 
  return err; 
  }
  callback(res.url1);
  callback1 = callback.url1;
  })

request('url2', function(err, res) {
  if (err) { 
  return err; 
  }
  callback(res.url2);
  callback2 = callback.url2;
  })
})

var callback = function(callback1,  callback2, err) {
	assert.equal(callback1,  callback2, 'these 2 are different urls');
		}
console.log('different urls');
