(function(){

	angular
		.module("myApp")
		.factory("userFactory", userFactory);

		function userFactory($http){
			var factory = {
				addUser: addUser,
				getSession: getSession,
				logout: logout,
				addQuestion: addQuestion,
				getQuestions: getQuestions,
				getQuestion: getQuestion,
				addAnswer: addAnswer,
				getAnswers: getAnswers,
				addLike: addLike
			};
			return factory;

			function getQuestion(index, callback){
				$http.get('/questions/'+ index)
				.success(function(data){
					callback(data);
				})
			}

			function getAnswers(index, callback){
				$http.get('/answers/'+ index)
				.success(function(data){
					callback(data);
				})
			}

			function addLike(index, callback){
				$http.post('/answer/'+ index)
				.success(function(data){
					callback(data);
				})
			}

			function addAnswer(index, newA, callback){
				$http.post('/answers/' + index, newA)
				.success(function(data){
					callback(data);
				})
			}

			function getQuestions(callback){
				$http.get('/questions')
				.success(function(data){
					callback(data);
				})
			}

			function addQuestion(newQ, callback){
				$http.post('/questions', newQ)
				.success(function(data){
					callback(data);
				})
			}

			function addUser(newUser, callback){
			 	$http.post('/users', newUser)
			 	.success(function(data){
			 		callback(data);
			 	})
			 }

			 function getSession(callback){
			 	$http.get('/session')
			 	.success(function(data){
			 		callback(data);
			 	})
			 }

			 function logout(callback){
				$http.post('/logout')
				.success(function(returnData){
					callback(returnData);
				})
			}

		}

})();
