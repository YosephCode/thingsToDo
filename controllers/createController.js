angular.module('codebetter.controllers.createController', [
	'codebetter.services.thingsToDoService',
	'ui.router'
])
.controller('createController', function($scope, $state, thingsToDoService){
	$scope.optionsPriority = [
		'low', 'average', 'high', 'critical'
	];
	$scope.thingsService = thingsToDoService;
	$scope.newTask = {
		task: null,
		priority: $scope.optionsPriority[0],
		note: null,
		dataRegistered: new Date()
	};
	$scope.createTask = function (taskCreated) {
		$scope.thingsService.createTask(taskCreated);
		$state.go('things');
	};
});