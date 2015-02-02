var request = require('request');

describe('test suite',function() {

	it("should respond with test", function(done) {
	  request("http://localhost:3000/", function(error, response, body){
	    expect(body).toEqual("test");
	    done();
	  });
	});

});