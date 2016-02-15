angular.module('codebetter.services.thingsToDoService', [
	'codebetter.services.bringTasksService'
])
.service('thingsToDoService', function(bringTasksService){
	var self = this;

	self.getTask = function getTask(task) {
		var tasksLength = self.tasks.length;
		for (var i = 0; i < tasksLength; i++) {
			var obj = self.tasks[i];
			if(obj.task == task) {
				return obj;
			}
		}
	};
	
	self.tasks = [];
	self.done = [];

	bringTasksService.query().then(function(response){
		self.tasks = response.data.tasks.toDo;
		self.done = response.data.tasks.done;		
	}, function(errResponse){
		alert('Houve um erro em nosso servidor.');
	});

	self.addDone = function addDone (task) {
		var taskDone = angular.copy(task);
		self.done.push(taskDone);
	};

	self.removeToDo = function removeToDo(index) {
		self.tasks.splice(index, 1);
	};

	self.createTask = function createTask(task) {
		var newTask = angular.copy(task);
		self.tasks.push(newTask);
	};
	return self;
});