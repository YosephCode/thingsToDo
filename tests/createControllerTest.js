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

        it('should init thingsService', function(){
            expect( ctrl.thingsService ).toBeDefined();
        });

        it('should init setOptionsPriority', function(){
            expect( ctrl.setOptionsPriority ).toBeDefined();
        });

        it('should init setScopeFunctions', function(){
            expect( ctrl.setScopeFunctions ).toBeDefined();
        });
    });

    describe('on setOptionsPriority', function(){
        beforeEach(function(){
            ctrl.setOptionsPriority();
        });

        it('should set scope.optionsPriority', function(){
            expect( scope.optionsPriority ).toEqual([
                'low', 'average', 'high', 'critical'
            ]);
        });

        it('should set scope.createTask', function(){
            expect( scope.createTask ).toBeDefined();
        });
    });

    describe('on setScopeFunctions', function(){
        it('should init scope.createTask', function(){
            ctrl.setScopeFunctions();
            expect( scope.createTask ).toBeDefined();
        });
    });

    describe('on createTask', function(){
        beforeEach(function(){
            spyOn(ctrl.thingsService, 'createTask');
            spyOn(state, 'go');
        });

        it('should call thingsService.createTask', function(){
            var taskCreated = {
                task: 'new task',
                priority: 'low',
                note: 'my note',
                dataRegistered: '23-05-19992'
            };
            scope.createTask(taskCreated);
            expect( ctrl.thingsService.createTask ).toHaveBeenCalledWith(taskCreated);
        });

        it('should move to the task list to do page', function() {
          scope.createTask();
          expect( state.go ).toHaveBeenCalledWith('things');
        });
    });
});