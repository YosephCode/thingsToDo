module.exports = function(config) {
	'use strict';

	config.set( {
		basePath : './',

		frameworks : [ 'jasmine' ],

		files: [
			'bower_components/angular/angular.min.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'src/main/js/**/*.js',
			'src/tests/**/*.js'
		],
		reporters : [ 'progress', 'coverage' ],
		preprocessors: {
			'src/main/js/**/*.js': ['coverage']
		},

		coverageReporter : {
			type : 'text',
			includeAllSources : true
		},

		port : 2080,
		colors : true,
		logLevel : config.LOG_INFO,
		autoWatch : false,
		browsers : [ 'PhantomJS' ],
		singleRun : true
	} );
};
