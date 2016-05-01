angular.module('codebetter.controllers.monthlyController', [
	'codebetter.services.thingsAppService'
])
.controller('monthlyController', function($scope, thingsAppService){
	var $this = this;
	$this.thingsService = thingsAppService;

	function initializer(){
		$scope.mode = 'monthly';
		$scope.state = thingsAppService.monthly;
		setScopeFunctions();
	}

	function removeToDo (task) {
		$this.thingsService.removeMonthly(task);
	}

	function setScopeFunctions(){
		$scope.removeToDo = removeToDo;
	}

	return initializer();
});
