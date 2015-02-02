var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
/* GET home page. */
router.get('/', function(req, res, next) {
  	db.on('error', console.error);
	db.once('open', function() {
	  var testSchema = new mongoose.Schema({
		  name: { type: String },
		  number: String, 
		});
	  var Test = mongoose.model('Test', testSchema);
		Test.find(function(err, test) {
			if (err) return console.error(err);
			mongoose.disconnect();
			res.send(test[0].name);

		});
	  

	});

	mongoose.connect('mongodb://localhost/test');
	
		
 	 //res.render('index', { title: 'Express' });
});

module.exports = router;
