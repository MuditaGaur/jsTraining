const request = require('request');

request('https://jsonplaceholder.typicode.com/users', function(err, res, body) {  
    console.log();
});

before(function(done) {
	describe('hookbefore', function(req, body, res) {
		var statuscode = res.statuscode;
		var username = res.username;
		done();
	})
}),
	
	
	describe('open url', function() {
		it('respond with opening url', function() {
			console.log('statuscode');
		})
	})
	
	describe('find user', function(done) {
		it('respond with usernname', function() {
			if(username== "Samantha") 
				for(i=0; i>10; i++) {
					console.log('username');
				}
		})
	})
	

	

