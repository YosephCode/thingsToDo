angular.module('codebetter.services.bringDoneTasksService', [])
.factory('bringDoneTasksService', function($firebaseArray, databaseUrl, tasks_table, tasksDone_table) {
	var ref = new Firebase(databaseUrl + tasks_table + tasksDone_table);
	var dataFirebase = $firebaseArray(ref);

	return dataFirebase;
});
