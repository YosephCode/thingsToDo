describe('createController', function(){
	// Instancia uma nova versão de meu módulo antes de cada teste
    beforeEach(module('codebetter.controllers.createController'));

    var ctrl, scope, state;

    beforeEach(inject(function($controller, $rootScope, $state){
        scope = $rootScope.$new();
        state = $state;
        ctrl = $controller('createController', {
            $scope: scope,
            $state: state
        });
    }));

    describe('on initializer', function(){
        beforeEach(function(){
            ctrl.initializer();
        });
    });
});