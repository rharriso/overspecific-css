const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');

gulp.task('test', () => {
	gulp.src('test/test.js', {read: false})
	// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}))
});

gulp.task('test-watch', () => {

  gutil.log('');
  gutil.log('Watching for changes in src');
  gutil.log('===========================');
  gutil.log('');

	gulp.watch(['src/**/*', 'test/**/*'], ['test'], (vinyl) => {
	  gutil.log(vinyl);	
		gulp.trigger('test');
  
    gutil.log('');
    gutil.log('Watching for changes in src');
    gutil.log('===========================');
    gutil.log('');
	})
})

