describe('http2', function(){
	'use strict';
    var scope, mockhttp;

    beforeEach(module('codebetter.controllers.http2Controller'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_){
    	scope = _$rootScope_.$new();
    	mockhttp = _$httpBackend_;
    	_$controller_('http2Controller', {
    		$scope : scope
    	});
    }));
    
    afterEach(function() {
	   mockhttp.verifyNoOutstandingExpectation();
	   mockhttp.verifyNoOutstandingRequest();
	});
    
    it('Using expect', function(){
    	mockhttp.expectGET('/testeAbc/abc')
    	.respond({'mana': 'papa', 'mia': 'mio'});
    	expect(scope.respons2).toBeUndefined();
    	mockhttp.flush();
    	expect(scope.respons2).toEqual({'mana': 'papa', 'mia': 'mio'});
    });
});