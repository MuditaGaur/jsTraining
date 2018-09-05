var request = require('request');
var assert = require('chai').assert;
var statuscode = 200;
var username = 'Samantha';

before(function(done) {
	request('https://jsonplaceholder.typicode.com/users', function(err, res, body) {  
		var statuscode = res.statuscode;
		var username = res.body;
	     done();
	})
})
		
	describe('open url', function() {
		it('respond with opening url', function() {
			assert.equal(statuscode,200,'Status not matching');
			console.log(statuscode);
		})
	})
	
	
	describe('find user', function() {
		it('respond with usernname', function(done) {
		  for(i=0; i<username.length; i++) {
			 if(username[i].username == 'Samantha'){
				console.log(username[i].email);
			}
			  }
                 done();			  
		});
	});
	
