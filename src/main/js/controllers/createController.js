angular.module('codebetter.controllers.createController', [
	'codebetter.services.thingsAppService',
	'ui.router'
])
.controller('createController', function($scope, $state, thingsAppService){
	
	var thingsService = thingsAppService;

	function initializer(){
		setNewTask();
		setScopeFunctions();
	}

	function setNewTask () {
		var timestampReg = new Date();
		$scope.optionsPriority = [
			'low', 'average', 'high', 'critical'
		];
		$scope.newTask = {
			task: null,
			priority: $scope.optionsPriority[0],
			note: null,
			type: 'toDo',
			dataRegistered: timestampReg.getTime()
		};
	}

	function setScopeFunctions(){
		$scope.createTask = createTask;
	}

	function createTask (taskCreated) {
		if(taskCreated.type === 'monthly')
			thingsService.createTaskMonthly(taskCreated);
		else
			thingsService.createTaskToDo(taskCreated);
		
		$state.go('things');
	}

	return initializer();
});
