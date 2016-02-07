angular.module('codebetter.controllers.createController', [
	'codebetter.services.thingsToDoService',
	'ui.router'
])
.controller('createController', function($scope, $state, thingsToDoService){
	var $this = this;

	$this.initializer = function initializer(){
		$this.thingsService = thingsToDoService;
		$this.setOptionsPriority();
		$this.setScopeFunctions();
	}

	$this.setOptionsPriority = function setOptionsPriority () {
		$scope.optionsPriority = [
			'low', 'average', 'high', 'critical'
		];
		$scope.newTask = {
			task: null,
			priority: $scope.optionsPriority[0],
			note: null,
			dataRegistered: new Date()
		};
	}

	$this.setScopeFunctions = function setScopeFunctions(){
		$scope.createTask = createTask;
	}

	function createTask (taskCreated) {
		$this.thingsService.createTask(taskCreated);
		$state.go('things');
	};

	return $this.initializer();
});