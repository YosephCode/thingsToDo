angular.module('codebetter.controllers.listController', [
	'codebetter.services.thingsToDoService'
])
.controller('listController', function($scope, thingsToDoService) {
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
});