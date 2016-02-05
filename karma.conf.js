// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    //lista de arquivos padrões a serem carregados no navegador
    files: [
      'node_modules/angular/angular.min.js',
      'controllers/*.js',
      'services/*.js',
      '*.js',
      'tests/*.js'
    ],
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