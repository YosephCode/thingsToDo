angular.module('codebetter.services.bringTasksToDoService', [])
.factory('bringTasksToDoService', function($firebaseArray, databaseUrl, tasks_table, tasksToDo_table) {
	var ref = new Firebase(databaseUrl + tasks_table + tasksToDo_table);
	var dataFirebase = $firebaseArray(ref);

	return dataFirebase;
});
