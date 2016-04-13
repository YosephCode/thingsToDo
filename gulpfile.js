(function(){
	'use strict';

	var browserSync	= require('browser-sync').create(),
		concat				= require('gulp-concat'),
		cssmin				= require('gulp-cssmin'),
		decomment			= require('gulp-decomment'),
		del						= require('del'),
		gulp					= require('gulp'),
		htmlmin				= require('gulp-htmlmin'),
		jshint				= require('gulp-jshint'),
		ngAnnotate 		= require('gulp-ng-annotate'),
		rename				= require('gulp-rename'),
		uglify				= require('gulp-uglify');

	gulp.task('serve', function(){
		return browserSync.init({
			server: {
				baseDir: ['./www', './']
			}
		});
	});

	gulp.task('clean', function(){
		return del('./www');
	});

	gulp.task('htmlmin', ['clean'], function(){
		return gulp.src('src/main/**/*.html')
		.pipe(decomment({trim: true}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./www/'));
	});

	gulp.task('css', ['clean'], function(){
		return gulp.src('src/main/css/**/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./www/css/'));
	});

	gulp.task('scripts', ['clean'], function(){
		return gulp.src('src/main/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(ngAnnotate())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./www/js/'));
	});

	gulp.task('json', ['clean'], function(){
		return gulp.src('src/main/js/**/*.json')
		.pipe(gulp.dest('./www/'));
	});

	gulp.task('default', ['serve']);
	gulp.task('build', ['clean', 'htmlmin', 'css', 'json', 'scripts']);
}());
