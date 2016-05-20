angular.module('codebetter.controllers.headerAppController', [
	'codebetter.services.thingsAppService'
])
.controller('headerAppController', function($scope, $rootScope, $state, thingsAppService) {

	var thingsService = thingsAppService;

	function initializer() {
		setScopeVars();
		setScopeFunctions();
	}

	function setMonthlyTasks () {
		var monthlyTasks = thingsService.monthly;
		for (var i = 0; i < monthlyTasks.length; i++){
			var monthTask = monthlyTasks[i];
			monthTask.type = 'toDo';
			thingsService.createTaskToDo(monthTask);
		}
	}

	function setScopeVars() {
		$rootScope.$state = $state;
	}

	function setScopeFunctions() {
		$scope.setMonthlyTasks = setMonthlyTasks;
	}

	return initializer();
});
