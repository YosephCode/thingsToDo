angular.module('codebetter.controllers.listController', [
	'codebetter.services.thingsToDoService'
])
.controller('listController', function($scope, $timeout, thingsToDoService) {
	var $this = this;

	$this.initializer = function initializer(){
		$this.thingsService = thingsToDoService;
		$scope.mode = 'toDo';
		$this.setScopeFunctions();
		
		$timeout(function(){
            $scope.state = thingsToDoService.tasks;
        },100);
	};

	function addDone (task) {
		$this.thingsService.getTask(task);
		$this.thingsService.addDone(task);
		$this.thingsService.removeToDo(task);
	}

	function removeToDo (task) {
		$this.thingsService.removeToDo(task);
	}

	$this.setScopeFunctions = function setScopeFunctions(){
		$scope.addDone = addDone;
		$scope.removeToDo = removeToDo;
	};

	$this.initializer();
});
