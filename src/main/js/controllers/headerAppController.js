angular.module('codebetter.controllers.headerAppController', [
	'codebetter.services.thingsAppService'
])
.controller('headerAppController', function($scope, $rootScope, $state, thingsAppService) {
	
	var thingsService = thingsAppService;
	var historyOfUserNavigation = [];
	function initializer() {
		checkUserConnection();
		setScopeVars();
		setScopeFunctions();

		setTimeout(function() {
			addHistory();
		}, 100);
	}

	function setMonthlyTasks () {
		var monthlyTasks = thingsService.monthly;
		for (var i = 0; i < monthlyTasks.length; i++){
			var monthTask = monthlyTasks[i];
			monthTask.type = 'toDo';
			thingsService.createTaskToDo(monthTask);	
		}
	}

	function checkUserConnection() {
		if (!navigator.onLine) {
			alert("Sua conexão com a internet falhou. Verifique sua conexão por favor.");
		}
	}

	function addHistory() {
		var linksPageNavigation = document.querySelectorAll('a');
		for (var i = 0; i < linksPageNavigation.length; i++) {
	      linksPageNavigation[i].addEventListener('click', historyNavigationHandler, true);
	    }
	}

	function historyNavigationHandler(event) {
		var data = event.target.getAttribute('href').split('/').pop();

		history.pushState({navigation: [data]}, data, event.target.href);
		var stateHistorty = history.state.navigation[0];
		
		historyOfUserNavigation.push(stateHistorty);
		console.info(historyOfUserNavigation);
	}

	function setScopeVars() {
		$rootScope.$state = $state;
	}

	function setScopeFunctions() {
		$scope.setMonthlyTasks = setMonthlyTasks;
	}

	return initializer();
});