var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection to database not working'));
db.once('open', function() {
	console.log('connected to database work');
});


module.exports = db;
