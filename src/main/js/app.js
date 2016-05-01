angular.module('codebetter', [
	'firebase',
	'codebetter.controllers.headerAppController',
	'codebetter.controllers.listController',
	'codebetter.controllers.doneController',
	'codebetter.controllers.createController',
	'codebetter.controllers.monthlyController',
	'ui.router'
])

.constant('databaseUrl', 'https://thingstodotoday.firebaseio.com/')
.constant('tasks_table', 'tasks/')
.constant('tasksToDo_table', 'toDo')
.constant('tasksDone_table', 'done')
.constant('monthlyTasks_table', 'monthly')

.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('things', {
			url:"/",
			views: {
				'headerApp': {
					templateUrl:'index.html',
					controller: 'headerAppController'
				},
				'list': {
					templateUrl:'templates/list.html',
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
		.state('monthly', {
			url:'/monthly',
			views: {
				'list': {
					templateUrl: 'templates/list.html',
					controller: 'monthlyController'
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
