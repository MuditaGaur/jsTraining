var request = require('request');
var fs = require('fs');
var assert = require('assert');
var Promise = require('es6-promise').Promise;
var statuscode;

var myRequestFunc = function() {
	target = 'https://www.google.com';
	var get = function(url) {
		return new promise(function(resolve, reject) {
			function reqCallback(err, res, body) {
			if (err) reject(err);
			else resolve(statuscode);
			console.log('satatuscode', statuscode);
			};
			request(url, reqCallback);
		});
	};
	get(target).then(function(res) {
		result = res;
		consolr.log(res);
	});
	return result;
};

var myfunc = myRequestFunc();
console.log(myfunc);
