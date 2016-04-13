angular.module('codebetter.controllers.http2Controller', [])
.controller('http2Controller', function($scope, $http) {
	
	function initialize(){
		callResponse();
	}

	function callResponse(){		
		$http.get('/testeAbc/abc').success(function(response){
			$scope.respons2 = response;
		});
	}

	initialize();

});