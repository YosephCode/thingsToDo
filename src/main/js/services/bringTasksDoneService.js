angular.module('codebetter.services.bringTasksDoneService', [])
.factory('bringTasksDoneService', function($firebaseArray) {
	var ref = new Firebase("https://thingstodotoday.firebaseio.com/tasks/done");
	var dataFirebase = $firebaseArray(ref);

	return dataFirebase;
});
