(function(){

	angular
		.module("myApp")
		.controller("ansCtrl", AnswerController);

		AnswerController.$inject = ['userFactory', '$location', '$routeParams', '$route'];

		function AnswerController(userFactory, $location, $routeParams, $route){
			var vm = this;
			vm.getSessiom = getSession;
			vm.logout = logout;
			vm.user = {};
			vm.question= {};
			vm.newA = {};
			vm.allAnswers = [];
			vm.getQuestion = getQuestion;
			vm.addAnswer = addAnswer;
			vm.getAnswers = getAnswers;
			vm.addLike = addLike;


			if($routeParams.id){
				getQuestion($routeParams.id);
			}

			function getQuestion(index){
				getSession();
				userFactory.getQuestion(index, function(data){
					vm.question = data;
					getAnswers(vm.question._id);
				})
			}

			function getAnswers(index){
				userFactory.getAnswers(index, function(data){
						vm.allAnswers = data;
				})
			}

			function addLike(index){
				userFactory.addLike(index, function(data){
					if(data.status){
						reloadRoute();
					}
				})
			}

			function reloadRoute(){
				$route.reload();
			}

			function addAnswer(index){
				userFactory.addAnswer(index, vm.newA, function(data){
					if(data.status){
						$location.url('/home')
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