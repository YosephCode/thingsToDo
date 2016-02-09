// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    //lista de arquivos padrões a serem carregados no navegador
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/ui-router/release/angular-ui-router.js',
      // 'node_modules/angular-mocks/angular-mocks.js',
      'public/min/*.js',
      'tests/*.js'
    ],
    reporters : [ 'progress', 'coverage' ],
     preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'public/min/*.js': ['coverage']
    },
    coverageReporter : {
      type : 'text',
      includeAllSources : true
    },
    //lista de arquivos padrões a serem excluidos
    exclude: ['Gruntfile.js'],
    //porta do servidor web
    port:3000,
    //inicia esse navegador
    browser: ['Chrome'],
    // browser: ['Phantomjs'],
    singleRun: false
  });
};