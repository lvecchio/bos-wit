/*
 Task Name: 'compile-sass'
 Description: Compiles sass into single global.css file
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths.json').paths;

module.exports = function() {
	console.log(paths.src.scss);
	return gulp.src(paths.src.scss)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(paths.dist.css))
}