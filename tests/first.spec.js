var request = require('request');

describe('test suite',function() {

	it("should respond with Test", function(done) {
	  request("http://localhost:3000/", function(error, response, body){
	    expect(body).toEqual("Test");
	    done();
	  });
	});

});