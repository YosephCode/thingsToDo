module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.initConfig({
		clean : {
			cleantmp : [ './tmp/' ],
			cleanboth : [ './tmp/', './www/' ],
		},
		connect: {
			server:{
				options: {
					hostname: 'localhost',
					port: 9191,
					keepalive: true,
					open: true,
					base: ['./www/', './']
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'./www/index.html': ['./src/main/index.html'],
					'./www/templates/list.html': ['./src/main/templates/list.html'],
					'./www/templates/createTask.html': ['./src/main/templates/createTask.html']
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: './src/main/css',
					src: ['**/*.css'],
					dest: './www/css',
					ext: '.min.css'
				}]
			}
		},
		copy: {
			main: {
				files: [{
					expand: true, cwd: './src/main/js/config', src: ['**'], dest: './www/config'
				}]
			},
		},
		jshint: {
			all: ['Gruntfile.js', 'gulpfile.js', './src/main/**/*.js', './src/test/**/*.js']
		},
		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			app: {
				files: {
					'./tmp/js/app.js': ['./src/main/js/app.js'],
					'./tmp/js/controllers/controllers.js': ['./src/main/js/controllers/**/*.js'],
					'./tmp/js/services/services.js': ['./src/main/js/services/**/*.js']
				}
			}
		},
		concat: {
			js: {
				src: './tmp/js/**/*.js',
				dest: './tmp/app.js'
			}
		},
		uglify: {
			js: {
				src: ['./tmp/app.js'],
				dest: './www/js/app.min.js'
			}
		}
	});

	grunt.registerTask('default', ['connect:server']);
	grunt.registerTask('build', ['clean:cleanboth', 'jshint', 'htmlmin', 'cssmin', 'copy', 'ngAnnotate', 'concat', 'uglify', 'clean:cleantmp']);
	grunt.registerTask('clear', ['clean:cleanboth']);
	grunt.registerTask('test', ['karma:unit']);
};
