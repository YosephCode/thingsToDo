angular.module('codebetter.services.bringTasksService', [])
.factory('bringTasksService', function($http) {
	return {
		query: function(){
			return $http.get('./config/tasks.json');
		}
	};
});
