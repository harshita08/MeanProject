var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true, 
		minlength: 2, 
		maxlength: 256
	},
	_questions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question'
		}
	],
	_answers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Answer'
		}
	],
})

mongoose.model('User', UserSchema);