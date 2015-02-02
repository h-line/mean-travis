var request = require('request');

it("should respond with test", function(done) {
  request("http://localhost:3000/test", function(error, response, body){
    expect(body).toEqual("test");
    done();
  });
});