var request = require('request');
var assert = require('chai').assert;

before(function(done) {
  request('https://jsonplaceholder.typicode.com/users', function(err, res, body) {  
    var statuscode = res.statuscode;
    var username = body;
    done();
  })
})
	
	
	describe('open url', function() {
	  it('respond with opening url', function() {
	  assert.equals(statuscode,200,'Status not matching');
	})
      })
	
	
	describe('find user', function(done) {
          it('respond with usernname', function() {
			
	   for(i=0; i<username.length; i++) {
	     if(username[i].username == 'samantha'){
	       console.log(username[i].email);
	       }					
	    }
          });
	});
	

	



