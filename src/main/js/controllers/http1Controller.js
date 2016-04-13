angular.module('codebetter.controllers.http1Controller', [])
.controller('http1Controller', function($scope, $http) {
	
	function initialize(){
		callResponse();
	}

	function callResponse(){		
		$http.get('/testeAbc/abc').success(function(response){
			$scope.respons = response;
		});
	}

	initialize();
});