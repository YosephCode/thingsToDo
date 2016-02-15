module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server:{
				options: {
					hostname:'localhost',
                    port: 9191,
                    keepalive: true,
                    open: true
				}
			}
		},
		karma: {
		  unit: {
		    configFile: 'karma.conf.js'
		  }
		},
		ngAnnotate: {
		    options: {
		        singleQuotes: true
		    },
		    app: {
		        files: {
		            './public/min-safe/app.js': ['app.js'],
		            './public/min-safe/js/controllers.js': ['controllers/*.js'],
		            './public/min-safe/js/services.js': ['services/*.js']
		        }
		    }
		},
		concat: {
		    js: { 
		        src: ['./public/min-safe/app.js', './public/min-safe/js/*.js'],
		        dest: './public/min/app.js'
		    }
		},
		uglify: {
		    js: { 
		        src: ['./public/min/app.js'],
		        dest: './public/min/app.js'
		    }
		}

	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate'); 

    // Start web server
    grunt.registerTask('default', ['connect:server']);
    grunt.registerTask('build', ['ngAnnotate', 'concat', 'uglify']);
    grunt.registerTask('test', ['karma:unit']);
}