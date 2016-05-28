describe('monthlyController', function(){

    beforeEach(angular.mock.module('codebetter.controllers.monthlyController'));
    var ctrl, scope;
    var mockthingsAppService = {
      monthly : [
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
      ],
      removeMonthly : function(){}
    };

    module('codebetter.controllers.monthlyController', function($provide) {
	    $provide.value('thingsAppService', mockthingsAppService);
	  });

    beforeEach(

    	angular.mock.inject(
    		function($controller, $rootScope){
		    	scope = $rootScope.$new();

		    	ctrl = $controller('monthlyController', {
		    		$scope : scope,
		    		thingsAppService : mockthingsAppService
		    	});
    		}
    	)
    );

    describe('on set mode/state', function(){
    	it('should set mode', function(){
    		expect(scope.mode).toEqual('monthly');
        expect(scope.state).toEqual(mockthingsAppService.monthly);
    	});
    });

    describe('on remove', function(){
      it('should remove task', function(){
        spyOn(mockthingsAppService, 'removeMonthly');
        scope.removeToDo();
        expect(mockthingsAppService.removeMonthly).toHaveBeenCalled();
      });
    });
});
