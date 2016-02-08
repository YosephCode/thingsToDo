angular.module('codebetter.controllers.createController', [
	'codebetter.services.thingsToDoService',
	'ui.router'
])
.controller('createController', ['$scope', '$state', 'thingsToDoService', function($scope, $state, thingsToDoService){
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
}]);
angular.module('codebetter.controllers.doneController', [
	'codebetter.services.thingsToDoService'
])
.controller('doneController', ['$scope', 'thingsToDoService', function($scope, thingsToDoService){
	var $this = this;

	$this.initializer = function initializer(){
		$scope.mode = "done";
		$scope.state = thingsToDoService.done;	
	}
	
	return $this.initializer();
}]);
angular.module('codebetter.controllers.listController', [
	'codebetter.services.thingsToDoService'
])
.controller('listController', ['$scope', 'thingsToDoService', function($scope, thingsToDoService) {
	var $this = this;
	
	$this.initializer = function initializer(){
		$this.thingsService = thingsToDoService;
		
		$scope.mode = 'toDo';
		$scope.state = thingsToDoService.tasks;
		
		$this.setScopeFunctions();
	}

	function addDone (task, index) {
		$this.thingsService.getTask(task);
		$this.thingsService.addDone(task);
		$this.thingsService.removeToDo(index);
	};

	function removeToDo (index) {
		$this.thingsService.removeToDo(index);	
	};

	$this.setScopeFunctions = function setScopeFunctions(){
		$scope.addDone = addDone;
		$scope.removeToDo = removeToDo;
	}

	$this.initializer();
}]);