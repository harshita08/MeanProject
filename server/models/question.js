var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	ques: {
		type: String,
		minlength: 10,
		required: true
	},
	description: {
		type: String,
	},
	_user: {
		type: String,
	},
	_answers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer'
		}
	]

}, {timestamps: true})

mongoose.model('Question', QuestionSchema);