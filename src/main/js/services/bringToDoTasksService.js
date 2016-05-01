angular.module('codebetter.services.bringToDoTasksService', [])
.factory('bringToDoTasksService', function($firebaseArray, databaseUrl, tasks_table, tasksToDo_table) {
	var ref = new Firebase(databaseUrl + tasks_table + tasksToDo_table);
	var dataFirebase = $firebaseArray(ref);

	return dataFirebase;
});
