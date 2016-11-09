var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app){

	app.post('/users', function(req,res){
		users.create(req,res);
	})

	app.get('/session', function(req,res){
		users.session(req,res);
	})

	app.post('/logout', function(req,res){
		users.logout(req,res);
	})

	app.post('/questions', function(req,res){
		questions.create(req,res);
	})

	app.get('/questions', function(req,res){
		questions.index(req,res);
	})

	app.get('/questions/:id', function(req,res){
		questions.findOne(req,res);
	})

	app.post('/answers/:id', function(req,res){
		answers.create(req,res);
	})

	app.get('/answers/:id', function(req,res){
		answers.find(req,res);
	})

	app.post('/answer/:id', function(req,res){
		answers.addLike(req,res);
	})

}