angular.module('codebetter.services.thingsToDoService', [
	'codebetter.services.bringTasksToDoService',
	'codebetter.services.bringTasksDoneService',
	'codebetter.services.bringMonthlyTasksService'
])
.service('thingsToDoService', function(bringTasksToDoService, bringTasksDoneService, bringMonthlyTasksService){
	var self = this;
	
	self.tasks = bringTasksToDoService;
	self.done = bringTasksDoneService;
	self.monthly = bringMonthlyTasksService;

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

	self.createTaskToDo = function createTaskToDo(newTask) {
		self.tasks.$add(newTask);
	};

	self.createTaskMonthly = function createTaskMonthly(newTask) {
		self.monthly.$add(newTask);
	};
	
	return self;
});