describe('listController', function() {
    var $scope;
    var controller;

    beforeEach(function() {
    	module('codebetter.controllers.listController');
    	module('codebetter.services.thingsToDoService');
        module('codebetter');


        inject(function(_$rootScope_, $controller) {
            $scope = _$rootScope_.$new();
            controller = $controller('listController', {$scope: $scope});
        });

    });
    describe('on call addDone function', function(){
    	it("should add in the Done list.", function() {
	    	$scope.addDone();
	        expect( $scope.addDone ).toHaveBeenCalled();
	    });
    });
    
});