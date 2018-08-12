var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();
app.use(bodyParser.json());


.get('/api/users', function(req,res){
    Users.getNextId(req,res)
})

.get('/api/users', function(req,res){
	Users.getAll(req,res)
})

.put('/api/users', function(req,res){
	Users.setAll(req,res)
})

.post('/api/users', function(req,res){
	Users.addOne(req,res)
})

.get('/api/users/:id', function(req,res){
	Users.getOne(req,res)
})

.put('/api/users/:id', function(req,res){
	Users.updateOne(req,res)
})

.delete('/api/users/:id', function(req,res){
	Users.deleteOne(req,res)
})
// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;

