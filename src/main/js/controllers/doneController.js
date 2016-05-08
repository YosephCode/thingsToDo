angular.module('codebetter.controllers.doneController', [
	'codebetter.services.thingsAppService'
])
.controller('doneController', function($scope, thingsAppService){
	
	var thingsService = thingsAppService;
	var editTitleTable;
	setTimeout(function(){
		editTitleTable = document.getElementsByClassName('titleTableEditable');
	}, 10);


	function initializer(){
		$scope.mode = 'done';
		$scope.state = thingsService.done;

		setTimeout(function(){
			hasContentEditabled();
		}, 100);
		setTimeout(function(){
			isContentEditable();
			hasContentEditabled();
		}, 1000);
		
	}

	function isContentEditable() {
		for (var i = 0; i < editTitleTable.length; i++) {
			editTitleTable[i].setAttribute('contenteditable', true);
	    	editTitleTable[i].addEventListener('blur', blurLocalWithChanges, true);
	    	editTitleTable[i].addEventListener('click', focusLocalWithChanges, true);
	    }
	}

	function blurLocalWithChanges(event) {
		localStorage.setItem('contenteditable', event.target.innerHTML);
	  	document.designMode = 'off';	
	}

	function focusLocalWithChanges() {
		document.designMode = 'on';	
	}

	function hasContentEditabled() {
		if (localStorage.getItem('contenteditable')) {
		  editTitleTable[0].innerHTML = localStorage.getItem('contenteditable');
		}
	}

	return initializer();
});
