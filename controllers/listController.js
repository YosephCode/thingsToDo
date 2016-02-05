angular.module('codebetter.controllers.listController', [
	'codebetter.services.thingsToDoService'
])
.controller('listController', function($scope, $log, thingsToDoService) 
{
	$scope.mode = "toDo";
	$scope.thingsService = thingsToDoService;
	$scope.state = thingsToDoService.tasks;
	
	$scope.addDone = function (task, index) {
		$scope.thingsService.getTask(task);
		$scope.thingsService.addDone(task);
		$scope.thingsService.removeToDo(index);
	};
	$scope.removeTask = function (index) {
		$scope.thingsService.removeToDo(index);	
	};
});