'use strict';

var browserify = require('browserify');
var watchify = require('watchify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
	watch('./public/scripts/app.js', './public/scripts/', 'bundle.js');
});

function watch (entry, dest, name) {
	var opts = {
		cache: {},
		packageCache: {},
		entries: [entry],
		debug: true
	}
	var b = watchify(browserify(opts));

	function bundle() {
		return b.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source(name))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest(dest));
	}

	b.on('update', bundle);
	b.on('log', gutil.log);

	bundle();
}