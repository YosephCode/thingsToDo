angular.module('codebetter.controllers.doneController', [
	'codebetter.services.thingsAppService'
])
.controller('doneController', function($scope, thingsAppService){
	var self = this;

	self.initializer = function initializer(){
		$scope.mode = 'done';
		$scope.state = thingsAppService.done;
	};

	return self.initializer();
});
