angular.module('codebetter.controllers.doneController', [
	'codebetter.services.thingsAppService'
])
.controller('doneController', function($scope, thingsAppService){
	
	var thingsService = thingsAppService;

	function initializer(){
		$scope.mode = 'done';
		$scope.state = thingsService.done;
	}

	return initializer();
});
