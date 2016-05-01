angular.module('codebetter.controllers.headerAppController', [
	'codebetter.services.thingsAppService'
])
.controller('headerAppController', function($scope, $rootScope, $state, thingsAppService) {
	$this = this;
	$this.thingsService = thingsAppService;
	
	$this.initializer = function initializer(){
		$rootScope.$state = $state;
		
		setScopeFunctions();
	};

	function setMonthlyTasks (){
		var monthlyTasks = $this.thingsService.monthly;
		for (var i = 0; i < monthlyTasks.length; i++){
			var monthTask = monthlyTasks[i];
			monthlyTask.type = 'toDo';
			$this.thingsService.createTaskToDo(monthTask);	
		}
	}

	function setScopeFunctions() {
		$scope.setMonthlyTasks = setMonthlyTasks;
		$scope.disabledBtnMonthly = $rootScope.$state.current.name !== 'things';
		console.warn($scope.disabledBtnMonthly);
	}

	return $this.initializer();
});