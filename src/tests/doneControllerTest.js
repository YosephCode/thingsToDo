xdescribe('doneController', function(){
	// Instancia uma nova versão de meu módulo antes de cada teste
    beforeEach(module('codebetter.controllers.doneController'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope){
    	scope = $rootScope.$new();
    	ctrl = $controller('doneController', {
    		$scope : scope
    	});
    }));
});