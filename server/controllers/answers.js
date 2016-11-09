var mongoose = require('mongoose')
var User = mongoose.model('User')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

module.exports = {

	create: function(req,res){
		var answer = new Answer(req.body);
		answer._question = req.params.id;
		answer._user = req.session.userInfo.name;
		answer.save(function(err){
			if(err){
				console.log("Error....answer not saved");
			} else{
				User.findOne({_id: req.session.userInfo.id}, function(err, user){
					if(err){
						console.log("2nd error");
						res.json({status: false});
					} else{
						user._answers.push(answer);
						user.save();
						Question.findOne({_id: req.params.id}, function(err, ques){
							if(err){
								console.log("Error.....question not found");
							} else{
								ques._answers.push(answer);
								ques.save();
								res.json({status: true});
							}
						})	
					}
				})

			}
		})
	},

	addLike: function(req,res){
		Answer.findOne({_id: req.params.id}, function(err, ans){
			if(err){
				res.json({status: false});
			} else{
				ans.likes++;
				ans.save(function(err){
					if(err){
						res.json({status: false});
					}else{
						res.json({status: true});
					}
				});
				
			}
		})
	},

	find: function(req,res){
		Answer.find({_question: req.params.id}, null, {sort: {likes: -1}},
		 function(err, answers){
			if(err){
				res.json(err);
			} else{
				res.json(answers);
			}
		})
	},

}