(function(){

	angular
		.module("myApp")
		.controller("quesCtrl", QuestionController);

		QuestionController.$inject = ['userFactory', '$location'];

		function QuestionController(userFactory, $location){
			var vm = this;
			vm.getSessiom = getSession;
			vm.logout = logout;
			vm.addQuestion = addQuestion;
			vm.user = {};
			vm.newQ = {};
			vm.allQues = [];
			vm.getQuestions = getQuestions;

			getQuestions();

			function getQuestions(){
				getSession();
				userFactory.getQuestions(function(data){
					vm.allQues = data;
					for (var i=0; i<vm.allQues.length; i++){
						var ans_count = vm.allQues[i]._answers.length;
						vm.allQues[i].ans_count = ans_count;
					}
				})
			}

			function addQuestion(){
				userFactory.addQuestion(vm.newQ, function(data){
					if(data.status){
						$location.url('/home');
					}
				})
			}

			function getSession(){
				userFactory.getSession(function(data){
					vm.user = data.userInfo;
					if (!vm.user){
						$location.url('/');
					}
				})
			}

			function logout(){
				userFactory.logout(function(data){
					if(data.status){
						$location.url('/');
					} else {
						vm.errors = data.errors;
					}
				})
			}

		}
})();