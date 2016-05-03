angular.module('codebetter.controllers.monthlyController', [
	'codebetter.services.thingsAppService'
])
.controller('monthlyController', function($scope, thingsAppService){
	
	var thingsService = thingsAppService;

	function initializer(){
		$scope.mode = 'monthly';
		$scope.state = thingsService.monthly;
		setScopeFunctions();
	}

	function removeToDo (task) {
		thingsService.removeMonthly(task);
	}

	function setScopeFunctions(){
		$scope.removeToDo = removeToDo;
	}

	return initializer();
});
