describe('monthlyController', function(){

    beforeEach(angular.mock.module('codebetter.controllers.monthlyController'));
    var mockthingsAppService = {};

    var ctrl, scope, service, mockHttp;

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

    describe('on set mode', function(){
    	it('should set mode', function(){
    		expect(scope.mode).toEqual('monthly');
    	});
    });
});