var mongoose = require('mongoose')
var User = mongoose.model('User')
var Question = mongoose.model('Question')

module.exports = {

	create: function(req,res){
		var question = new Question(req.body);
		question._user = req.session.userInfo.name;
		question.save(function(err){
			if(err){
				console.log("1st error");
				res.json({status: false});
			} else{
				User.findOne({_id: req.session.userInfo.id}, function(err, user){
					if(err){
						console.log("2nd error");
						res.json({status: false});
					} else{
						user._questions.push(question);
						user.save();
						console.log("Success!!!!!!!!");
						res.json({status: true});	
					}
				})
			}
		})
	},

	index: function(req,res){
		Question.find({}, function(err, questions){
			if(err){
				res.json(err);
			} else{
				res.json(questions);
			}
		})
	},

	findOne: function(req,res){
		Question.findOne({_id: req.params.id}, function(err, ques){
			if(err){
				console.log("Error.....");
				res.json(err);
			} else{
				res.json(ques);
			}
		})
	},


}