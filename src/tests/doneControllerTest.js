describe('doneController', function(){

    beforeEach(angular.mock.module('codebetter.controllers.doneController'));
    var ctrl, scope;
    var mockthingsAppService = {
      done : [
        {
          'task': 'teste',
          'priority' : 'critical',
          'note': 'work test',
          'dataRegistered': '01/05/2016'
        },
        {
          'task': 'teste2',
          'priority' : 'low',
          'note': 'work test2',
          'dataRegistered': '01/05/2015'
        }
      ]
    };

    module('codebetter.controllers.doneController', function($provide) {
      $provide.value('thingsAppService', mockthingsAppService);
    });

    beforeEach(

      angular.mock.inject(
        function($controller, $rootScope){
          scope = $rootScope.$new();

          ctrl = $controller('doneController', {
            $scope : scope,
            thingsAppService : mockthingsAppService
          });
        }
      )
    );

    describe('on set mode/state', function(){
      it('should set mode', function(){
        expect(scope.mode).toEqual('done');
        expect(scope.state).toEqual(mockthingsAppService.done);
      });
    });
});
