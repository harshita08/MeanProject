(function(){

	angular
		.module("myApp")
		.controller("userCtrl", userController);

		userController.$inject = ['userFactory', '$location'];

		function userController(userFactory, $location){
			var vm = this;
			vm.addUser = addUser;
			vm.newUser = {};
			vm.user = {};

			function addUser(){
				userFactory.addUser(vm.newUser, function(data){
					if(data.status){
						vm.user = data.userInfo;
						$location.url('/home');
					} else{
						console.log("Error...");
					}
				});
			}


		}
})();