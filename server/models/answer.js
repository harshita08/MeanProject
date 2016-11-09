var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	ans: {
		type: String,
		minlength: 5,
		required: true
	},
	detail: {
		type: String,
	},
	_user: {
		type: String,
	},
	_question:
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question'
		},
	likes: {
		type: Number,
		default: 0
	}

}, {timestamps: true})

mongoose.model('Answer', AnswerSchema);