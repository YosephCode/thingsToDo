angular.module('codebetter.controllers.createController', [
	'codebetter.services.thingsToDoService',
	'ui.router'
])
.controller('createController', function($scope, $state, thingsToDoService){
	var self = this;

	self.initializer = function initializer(){
		self.thingsService = thingsToDoService;
		self.setOptionsPriority();
		self.setScopeFunctions();
	};

	self.setOptionsPriority = function setOptionsPriority () {
		var timestampReg = new Date();
		$scope.optionsPriority = [
			'low', 'average', 'high', 'critical'
		];
		$scope.newTask = {
			task: null,
			priority: $scope.optionsPriority[0],
			note: null,
			dataRegistered: timestampReg.getTime()
		};
	};

	self.setScopeFunctions = function setScopeFunctions(){
		$scope.createTask = createTask;
	};

	function createTask (taskCreated) {
		self.thingsService.createTask(taskCreated);
		$state.go('things');
	}

	return self.initializer();
});
