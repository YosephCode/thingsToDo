describe('bringTasksService', function(){
    'use strict';

    beforeEach(module('codebetter.services.bringTasksService'));

    var service, httpBackendMock;
    var TASKS = {
        'task1': 'my task',
        'task2': 'your task'
    };

    var URL = './config/tasks.json';

    beforeEach(inject(function(_$httpBackend_, _$injector_){
        service = _$injector_.get('bringTasksService');
        httpBackendMock = _$httpBackend_;
    }));

    afterEach(function() {
       httpBackendMock.verifyNoOutstandingExpectation();
       httpBackendMock.verifyNoOutstandingRequest();
    });

    describe('On query', function(){
        it('should return tasks', function(){
            httpBackendMock.expectGET(URL).respond(200, TASKS);
            var response;
            service.query().success(function(resp){
                response = resp;
            });
            expect(response).toBeUndefined();
            httpBackendMock.flush();
            expect(response).toEqual(TASKS);
        });

        it('should return error', function(){
            httpBackendMock.expectGET(URL).respond(404, TASKS);
            var response;
            service.query().error(function(resp){
                response = 'error';
            });
            expect(response).toBeUndefined();
            httpBackendMock.flush();
            expect(response).toEqual('error');
        });
    });
});