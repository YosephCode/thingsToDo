angular.module('codebetter.controllers.doneController', [
	'codebetter.services.thingsToDoService'
])
.controller('doneController', function($scope, thingsToDoService){
	var self = this;

	self.initializer = function initializer(){
		$scope.mode = 'done';
		$scope.state = thingsToDoService.done;
	};

	return self.initializer();
});
