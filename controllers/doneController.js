angular.module('codebetter.controllers.doneController', [
	'codebetter.services.thingsToDoService'
])
.controller('doneController', function($scope, thingsToDoService){
	var $this = this;

	$this.initializer = function initializer(){
		$scope.mode = 'done';
		$scope.state = thingsToDoService.done;	
	}
	
	return $this.initializer();
});