angular.module('codebetter.services.bringTasksToDoService', [])
.factory('bringTasksToDoService', function($firebaseArray) {
	var ref = new Firebase("https://thingstodotoday.firebaseio.com/tasks/toDo");
	var dataFirebase = $firebaseArray(ref);

	return dataFirebase;
});
