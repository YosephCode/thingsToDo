angular.module('codebetter.services.thingsToDoService', [
	'codebetter.services.bringTasksToDoService',
	'codebetter.services.bringTasksDoneService'
])
.service('thingsToDoService', function($firebaseObject, bringTasksToDoService, bringTasksDoneService, databaseUrl, tasks_table, tasksToDo_table){
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
		console.info(taskDone);
		self.done.$add(taskDone);
	};

	self.removeToDo = function removeToDo(task) {
		var refTask = databaseUrl + tasks_table + tasksToDo_table + '/' + task.$id;
        var taskTrash = $firebaseObject(new Firebase(refTask));
        taskTrash.$remove();
	};

	self.createTask = function createTask(task) {
		var newTask = angular.copy(task);
		self.tasks.push(newTask);
	};
	return self;
});
