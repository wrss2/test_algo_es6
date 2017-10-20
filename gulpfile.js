'use strict'

const gulp = require('gulp');
const rename = require("gulp-rename");
const babel = require('gulp-babel');

// Create an es6 task
gulp.task('es6', () => {
	// Return gulp.src with the src set to our src folder
	// we return here do that we indicate to gulp that this task is async
	return gulp.src('./babel.js')
		// We pipe the source into babel
		.pipe(babel({
			// We need to tell babel to use the babel-preset-es2015
			presets: ['es2015']
		}))
		// We then pipe that into gulp.dest to set a final destination
		// In this case a build folder

    .pipe(rename({
      basename: "test",
    }))
		.pipe(gulp.dest('./'));

});
// Create a default gulp task, this lets us type gulp into the terminal
// The ['es6'] tells gulp what task or tasks to run right away.
gulp.task('default', ['es6'],() => {
	// Tell gulp to watch for file changes on src/app.js
	// run the es6 task when it changes!
	gulp.watch('./babel.js',['es6'])
});
