angular.module('codebetter.controllers.listController', [
	'codebetter.services.thingsAppService'
])
.controller('listController', function($scope, $timeout, thingsAppService) {
	
	var thingsService = thingsAppService;

	function initializer(){
		$scope.mode = 'toDo';
		$scope.state = thingsAppService.tasks;

		setScopeFunctions();
	}

	function addDone (task) {
		thingsService.getTask(task);
		thingsService.addDone(task);
		thingsService.removeToDo(task);
	}

	function removeToDo (task) {
		thingsService.removeToDo(task);
	}

	function setScopeFunctions(){
		$scope.addDone = addDone;
		$scope.removeToDo = removeToDo;
	}

	return initializer();
});
