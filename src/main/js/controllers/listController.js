angular.module('codebetter.controllers.listController', [
	'codebetter.services.thingsAppService'
])
.controller('listController', function($scope, $timeout, thingsAppService) {
	
	function initializer(){
		var thingsService = thingsAppService;
		$scope.mode = 'toDo';
		setScopeFunctions();

		$timeout(function(){
            $scope.state = thingsAppService.tasks;
        },100);
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
