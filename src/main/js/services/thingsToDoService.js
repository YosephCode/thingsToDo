angular.module('codebetter.services.thingsToDoService', [
	'codebetter.services.bringTasksToDoService',
	'codebetter.services.bringTasksDoneService'
])
.service('thingsToDoService', function(bringTasksToDoService, bringTasksDoneService){
	var self = this;
	
	self.tasks = bringTasksToDoService;
	self.done = bringTasksDoneService;

	self.getTask = function getTask(task) {
		var tasksLength = self.tasks.length;
		for (var i = 0; i < tasksLength; i++) {
			var obj = self.tasks[i];
			if(obj.task == task) {
				return obj;
			}
		}
	};

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
