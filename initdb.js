var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  
});

mongoose.connect('mongodb://localhost/test');
var testSchema = new mongoose.Schema({
	  name: { type: String },
	  number: String, 
	});
  var Test = mongoose.model('Test', testSchema);

var Test = mongoose.model('Test', testSchema);

var test1 = new Test({
  name: 'Test',
  number: '1'
});

test1.save(function(err, schema) {
  if (err) return console.error(err);
  mongoose.disconnect();
  return;
});