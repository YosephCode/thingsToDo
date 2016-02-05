angular.module('codebetter.controllers.doneController', [
	'codebetter.services.thingsToDoService'
])
.controller('doneController', function($scope, thingsToDoService){
	$scope.mode = "done";
	$scope.state = thingsToDoService.done;
});