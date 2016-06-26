describe('thingsAppService', function(){
    'use strict';

    

    var service;
    var toDoServiceMock = [
    	{
			"task": "Me excluit",
			"priority": "low",
			"note": "teste",
			"dataRegistered": "01/05/2016"
		},
		{
			"task": "Morar em Joinville",
			"priority": "Critical",
			"note": "Pegar o vôo para Joinville, arrumar ap, morar e começar a trabalhar.",
			"dataRegistered": "12/11/2015"
		}
	];
    var doneServiceMock = [];
    var monthlyServiceMock = [
		{
			"task": "Pagar aluguel",
			"priority": "Critical",
			"note": "Pagamento do aluguel vence sempre no dia 08",
			"dataRegistered": "01/05/2016"
		},
		{
			"task": "Pagar condomínio",
			"priority": "Critical",
			"note": "Vence no dia 10",
			"dataRegistered": "01/05/2016"
		}
    ];
    
    beforeEach(module('codebetter.services.thingsAppService', function($provide) {
	    $provide.value('bringToDoTasksService', toDoServiceMock);
	    $provide.value('bringDoneTasksService', doneServiceMock);
	    $provide.value('bringMonthlyTasksService', monthlyServiceMock);
	}));

    beforeEach(function(){
        inject(function(_$injector_){
            service = _$injector_.get('thingsAppService');
        });
    });

    describe('on init', function(){
    	it('should set vars', function(){
    		expect(service.tasks).toEqual(toDoServiceMock);
    		expect(service.done).toEqual([]);
    		expect(service.monthly).toEqual(monthlyServiceMock);
    	});
    });
});
