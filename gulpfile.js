const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
require('babel-core/register');

gulp.task('test', () => {
	gulp.src('test/test.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}))
    .on('error', swallowError)
});

gulp.task('test-watch', () => {
  gulp.start('test');
  printWatchMessage();

	gulp.watch(['src/**/*', 'test/**/*'], (vinyl) => {
    console.log('running tests');
	  console.log(vinyl);	
	  console.log(vinyl.path);	
	  console.log(vinyl.event);	

    gulp.src('test/test.js', {read: false})
      .pipe(mocha({reporter: 'nyan'}))
      .on('error', swallowError)
    printWatchMessage();
	})
})

function printWatchMessage () {
    gutil.log('');
    gutil.log('Watching for changes in src');
    gutil.log('===========================');
    gutil.log('');
}

function swallowError (error) {
  console.error(error.toString())
}