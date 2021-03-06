describe('createController', function(){

    beforeEach(angular.mock.module('codebetter.controllers.createController'));
    var ctrl, scope, state;
    var mockthingsAppService = {
      createTaskMonthly: function(){},
      createTaskToDo: function(){}
    };

    module('codebetter.controllers.createController', function($provide) {
      $provide.value('thingsAppService', mockthingsAppService);
    });

    beforeEach(
      angular.mock.inject(
        function($controller, $rootScope, $state){
          scope = $rootScope.$new();
          state = $state;

          ctrl = $controller('createController', {
            $scope : scope,
            $state : state,
            thingsAppService : mockthingsAppService
          });
        }
      )
    );

    describe('on set optionsPriority/newTask', function(){
      it('should set optionsPriority/newTask', function(){
        var timeStamp = 1464467614626;
        scope.newTask.dataRegistered = timeStamp;
        expect(scope.optionsPriority).toEqual(['low', 'average', 'high', 'critical']);
        expect(scope.newTask).toEqual({
          task: null,
          priority: scope.optionsPriority[0],
          note: null,
          type: 'toDo',
          dataRegistered: timeStamp
        });
      });
    });

    describe('on create task monthly', function(){
      it('should create monthly task', function(){
        spyOn(mockthingsAppService, 'createTaskMonthly');
        spyOn(state, 'go');
        var taskCreated = {
          type: 'monthly'
        };
        scope.createTask(taskCreated);
        expect(mockthingsAppService.createTaskMonthly).toHaveBeenCalled();
        expect(state.go).toHaveBeenCalledWith('things.toDo');
      });
    });

    describe('on create task toDo', function(){
      it('should create toDo task', function(){
        spyOn(mockthingsAppService, 'createTaskToDo');
        spyOn(state, 'go');
        var taskCreated = {
          type: 'toDo'
        };
        scope.createTask(taskCreated);
        expect(mockthingsAppService.createTaskToDo).toHaveBeenCalled();
        expect(state.go).toHaveBeenCalledWith('things.toDo');
      });
    });
});
