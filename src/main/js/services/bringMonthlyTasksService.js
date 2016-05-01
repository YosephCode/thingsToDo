angular.module('codebetter.services.bringMonthlyTasksService', [])
.factory('bringMonthlyTasksService', function($firebaseArray, databaseUrl, tasks_table, monthlyTasks_table) {
	var ref = new Firebase(databaseUrl + tasks_table + monthlyTasks_table);
	var dataFirebase = $firebaseArray(ref);

	return dataFirebase;
});
