describe('doneController', function(){
	// Instancia uma nova versão de meu módulo antes de cada teste
    beforeEach(module('codebetter.controllers.doneController'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope){
    	scope = $rootScope.$new();
    	ctrl = $controller('doneController', {
    		$scope : scope
    	});
    }));

    describe('on initializer', function(){
    	beforeEach(function(){
    		ctrl.initializer();
    	});

    	it('should set scope mode', function(){
    		expect( scope.mode ).toEqual( 'done' );
    	});

    	it('should set scope state', function(){
    		expect( scope.state ).toBeDefined();
    	});
    });
});