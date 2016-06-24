describe('headerAppController', function(){

    beforeEach(angular.mock.module('codebetter.controllers.headerAppController'));
    var ctrl, scope, rootScope, state;

    var mockthingsAppService = {
      monthly : [
        {
          'task': 'teste',
          'priority' : 'critical',
          'note': 'work test',
          'dataRegistered': '01/05/2016'
        }
      ],
      createTaskToDo : function(){}
    };

    var mockRootScope = {
      '$state' : jasmine.createSpyObj('$state', ['$state'])
    };

    module('codebetter.controllers.headerAppController', function($provide) {
      $provide.value('thingsAppService', mockthingsAppService);
      $provide.value('$rooScope', mockRootScope);
    });

    beforeEach(
      angular.mock.inject(
        function($controller, $rootScope){
          scope = $rootScope.$new();

          ctrl = $controller('headerAppController', {
            $scope : scope,
            $rootScope : mockRootScope,
            $state : state,
            thingsAppService : mockthingsAppService
          });
        }
      )
    );

    describe('on set monthly tasks', function(){
      it('should set monthly tasks', function(){
        spyOn(mockthingsAppService, 'createTaskToDo');
        scope.setMonthlyTasks();
        expect(mockthingsAppService.monthly).toBeDefined();
        expect(mockthingsAppService.createTaskToDo).toHaveBeenCalled();
        expect(mockthingsAppService.monthly[0].type).toEqual('toDo');
      });
    });
});
