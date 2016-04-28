angular.module('codebetter', [
	'firebase',
	'codebetter.controllers.listController',
	'codebetter.controllers.doneController',
	'codebetter.controllers.createController',
	'ui.router'
])
.value('databaseUrl', 'https://thingstodotoday.firebaseio.com/')
.value('tasks_table', 'tasks/')
.value('tasksToDo_table', 'toDo')
.value('tasksDone_table', 'done')
.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('things', {
			url:"/",
			views: {
				'list': {
					templateUrl: 'templates/list.html',
					controller: 'listController'
				}
			}
		})
		.state('done', {
			url:'/done',
			views: {
				'list': {
					templateUrl: 'templates/list.html',
					controller: 'doneController'
				}
			}
		})
		.state('create', {
			url:'/create',
			views: {
				'list': {
					templateUrl: 'templates/createTask.html',
					controller: 'createController'
				}
			}
		});
}]);
