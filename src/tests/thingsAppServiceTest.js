describe('thingsAppService', function(){
    'use strict';

    beforeEach(module('codebetter.services.thingsAppService'));

    var service;

    beforeEach(function(){
        inject(function(_$injector_){
            service = _$injector_.get('thingsAppService');
        });
    });
});
