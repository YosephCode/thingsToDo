angular.module('codebetter.services.thingsToDoService', [
	'codebetter.services.bringToDoTasksService',
	'codebetter.services.bringDoneTasksService',
	'codebetter.services.bringMonthlyTasksService'
])
.service('thingsToDoService', function(bringToDoTasksService, bringDoneTasksService, bringMonthlyTasksService){
	var self = this;
	
	self.tasks = bringToDoTasksService;
	self.done = bringDoneTasksService;
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