describe('thingsToDoService', function(){
    'use strict';

    beforeEach(module('codebetter.services.thingsToDoService'));

    var service, httpBackendMock;
    
    var TASKS = {
        'tasks': {
            'toDo': [],
            'done': []   
        }
    };

    var URL = './config/tasks.json';

    beforeEach(function(){
        inject(function(_$httpBackend_, _$injector_){
            service = _$injector_.get('thingsToDoService');
            httpBackendMock = _$httpBackend_;
        });
    });

    afterEach(function() {
       httpBackendMock.verifyNoOutstandingExpectation();
       httpBackendMock.verifyNoOutstandingRequest();
    });

    describe('On initialize', function(){
        it('should set tasks toDo', function(){
            httpBackendMock.expectGET(URL).respond(200, TASKS);
            expect(service.tasks).toEqual([]);
            httpBackendMock.flush();
            expect(service.tasks).toEqual(TASKS.tasks.toDo);
        });
        it('should set tasks done', function(){
            httpBackendMock.expectGET(URL).respond(200, TASKS);
            expect(service.done).toEqual([]);
            httpBackendMock.flush();
            expect(service.done).toEqual(TASKS.tasks.done);
        });
        it('should not set tasks toDo', function(){
            httpBackendMock.expectGET(URL).respond(404, TASKS);
            expect(service.tasks).toEqual([]);
            httpBackendMock.flush();
            expect(service.tasks).toEqual([]);
        });
        it('should not set tasks done', function(){
            httpBackendMock.expectGET(URL).respond(404, TASKS);
            expect(service.done).toEqual([]);
            httpBackendMock.flush();
            expect(service.done).toEqual([]);
        });
        it('should call window alert', function(){
           spyOn(window, 'alert');
           httpBackendMock.expectGET(URL).respond(404, TASKS);
           expect(window.alert).not.toHaveBeenCalled();
           httpBackendMock.flush(); 
           expect(window.alert).toHaveBeenCalledWith('Houve um erro em nosso servidor.');
        });
    });

    describe('on addDone', function(){
        it('should add task to done list', function(){
            httpBackendMock.expectGET(URL).respond(200, TASKS);
            httpBackendMock.flush(); 
            var taskDone = {
                name: 'my task'
            };
            service.addDone(taskDone);
            expect(service.done).toEqual([taskDone]);
        });
    });

    describe('on removeTodo', function(){
        it('should remove task from toDo list', function(){
            httpBackendMock.expectGET(URL).respond(200, TASKS);
            httpBackendMock.flush(); 
            service.tasks = [{ name: 'my task' }];
            service.removeToDo(0);
            expect(service.tasks).toEqual([]);
        });
    });

    describe('on createTask', function(){
        it('should create task', function(){
            httpBackendMock.expectGET(URL).respond(200, TASKS);
            httpBackendMock.flush(); 
            var newTask = {
                name: 'my task'
            };
            service.createTask(newTask);
            expect(service.tasks).toEqual([newTask]);
        });
    });

    describe('on getTask', function(){
        it('should get task', function(){
            httpBackendMock.expectGET(URL).respond(200, TASKS);
            httpBackendMock.flush(); 
            var task = {
                name: 'my task'
            };
            service.tasks = [task];
            service.getTask(task);
            expect(service.tasks).toEqual([task]);
        });
    });
});