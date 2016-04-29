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
		self.done.$add(task);
	};

	self.removeToDo = function removeToDo(task) {
		self.tasks.$remove(task);
	};

	self.createTask = function createTask(newTask) {
		self.tasks.$add(newTask);
	};
	
	return self;
});
