describe('http1', function(){
	'use strict';
    var scope, mockhttp;

    beforeEach(module('codebetter.controllers.http1Controller'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_){
    	scope = _$rootScope_.$new();
    	mockhttp = _$httpBackend_;
    	_$controller_('http1Controller', {
    		$scope : scope
    	});    	
    }));

    afterEach(function() {
	   mockhttp.verifyNoOutstandingExpectation();
	   mockhttp.verifyNoOutstandingRequest();
	});

    it('Using When', function(){
    	mockhttp.whenGET('/testeAbc/abc')
    	.respond({'mana': 'mia', 'papa': 'mio'});
    	expect(scope.respons).toBeUndefined();
    	mockhttp.flush();
    	expect(scope.respons).toEqual({'mana': 'mia', 'papa': 'mio'});
    });
});