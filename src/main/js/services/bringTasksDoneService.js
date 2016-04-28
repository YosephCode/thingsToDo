angular.module('codebetter.services.bringTasksDoneService', [])
.factory('bringTasksDoneService', function($firebaseArray, databaseUrl, tasks_table, tasksDone_table) {
	var ref = new Firebase(databaseUrl + tasks_table + tasksDone_table);
	var dataFirebase = $firebaseArray(ref);

	return dataFirebase;
});
