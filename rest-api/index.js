var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());

// YOUR CODE BELOW

/* START SOLUTION */
// Transform all incoming `id` params to numbers
// to allow easy consumption by our helpers
app.param('id', function (req, res, next, id) {
  req.params.id = Number(id);
  next();
});

app.get('/api/users', function (req, res) {
  res.status(200).json(Users.getAll());
});

app.post('/api/users', function (req, res) {
  res.status(201).json(Users.addOne(req.body));
});

app.get('/api/users/:id', function (req, res) {
  var user = Users.getOne(req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.sendStatus(404);
  }
});

app.put('/api/users/:id', function (req, res) {
  res.status(200).json(Users.updateOne(req.params.id, req.body));
});

app.delete('/api/users/:id', function (req, res) {
  res.status(200).json(Users.deleteOne(req.params.id));
});
/* END SOLUTION */

// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

