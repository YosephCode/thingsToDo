describe('listController', function(){

    beforeEach(angular.mock.module('codebetter.controllers.listController'));
    var ctrl, scope;
    var mockthingsAppService = {
      tasks : [
        {
          'task': 'teste',
          'priority' : 'critical',
          'note': 'work test',
          'dataRegistered': '01/05/2016'
        }
      ],
      getTask: function(){},
      addDone: function(){},
      removeToDo: function(){}
    };

    module('codebetter.controllers.listController', function($provide) {
      $provide.value('thingsAppService', mockthingsAppService);
    });

    beforeEach(
      angular.mock.inject(
        function($controller, $rootScope){
          scope = $rootScope.$new();

          ctrl = $controller('listController', {
            $scope : scope,
            thingsAppService : mockthingsAppService
          });
        }
      )
    );

    describe('on set mode/state', function(){
      it('should set mode/state', function(){
        expect(scope.mode).toEqual('toDo');
        expect(scope.state).toEqual(mockthingsAppService.tasks);
      });
    });

    describe('on add done task', function(){
      it('should add done task', function(){
        spyOn(mockthingsAppService, 'getTask');
        spyOn(mockthingsAppService, 'addDone');
        spyOn(mockthingsAppService, 'removeToDo');
        var taskDone = {
          'task': 'teste2',
          'priority' : 'low',
          'note': 'work test2',
          'dataRegistered': '01/05/2015'
        };
        scope.addDone(taskDone);
        expect(mockthingsAppService.getTask).toHaveBeenCalledWith(taskDone);
        expect(mockthingsAppService.addDone).toHaveBeenCalledWith(taskDone);
        expect(mockthingsAppService.removeToDo).toHaveBeenCalledWith(taskDone);
      });
    });

    describe('on add remove task', function(){
      it('should add remove task', function(){
        spyOn(mockthingsAppService, 'removeToDo');
        var task = {
          'task': 'teste2',
          'priority' : 'low',
          'note': 'work test2',
          'dataRegistered': '01/05/2015'
        };
        scope.removeToDo(task);
        expect(mockthingsAppService.removeToDo).toHaveBeenCalledWith(task);
      });
    });
});
