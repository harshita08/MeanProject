var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider

		.when("/", {
			templateUrl: "./partials/login.html"
		})

		.when("/home", {
			templateUrl: "./partials/home.html"
		})

		.when("/question", {
			templateUrl: "./partials/question.html"
		})

		.when("/question/:id", {
			templateUrl: "./partials/showQuestion.html"
		})

		.when("/answer/:id", {
			templateUrl: "./partials/answer.html"
		})

		// .when("/user/:id", {
		// 	templateUrl: "./partials/user.html"
		// })

		.otherwise({
			redirectTo:"/"
		});
})
