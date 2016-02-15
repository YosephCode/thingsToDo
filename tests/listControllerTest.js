describe('listController', function() {
    // Instancia uma nova versão de meu módulo antes de cada teste
    beforeEach(module('codebetter.controllers.listController'));
    
    var ctrl, scope;
    
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller('listController', {
            $scope: scope
        });
    }));

    describe('on initializer', function(){
        beforeEach(function(){
            ctrl.initializer();
        });

        it('should init thingsService', function(){
            expect( ctrl.thingsService ).toBeDefined();
        });

        it('should init mode', function(){
            expect( scope.mode ).toEqual('toDo');
        });

        it('should init setScopeFunctions', function(){
            expect( ctrl.setScopeFunctions ).toBeDefined();
        });
    });

    describe('on function addDone', function(){
        it('should getTask to Done', function(){
            var task = {
                task: 'meu task',
                priority: 'low',
                note: 'minha descricao',
                dataRegistered: '19/04/2016'
            };
            spyOn(ctrl.thingsService, 'getTask');
            scope.addDone(task);
            expect( ctrl.thingsService.getTask ).toHaveBeenCalledWith( task );
        });

        it('should add task to Done', function(){
            var task = {
                task: 'meu task',
                priority: 'low',
                note: 'minha descricao',
                dataRegistered: '19/04/2016'
            };
            spyOn(ctrl.thingsService, 'addDone');
            scope.addDone(task);
            expect( ctrl.thingsService.addDone ).toHaveBeenCalledWith( task );
        });

        it('should remove task ToDo', function(){
            var task = {
                task: 'meu task',
                priority: 'low',
                note: 'minha descricao',
                dataRegistered: '19/04/2016'
            };
            var index = 1;

            spyOn(ctrl.thingsService, 'removeToDo');
            scope.addDone(task, index);
            expect( ctrl.thingsService.removeToDo ).toHaveBeenCalledWith( index );
        });
    });

    describe('on removeToDo', function(){
        it('should remove task ToDo', function(){
            spyOn(ctrl.thingsService, 'removeToDo');
            var index = 2;
            scope.removeToDo(index);
            expect( ctrl.thingsService.removeToDo ).toHaveBeenCalledWith( index );
        });
    });
});