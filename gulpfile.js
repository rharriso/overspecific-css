const fs = require('fs');
const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const mocha = require('gulp-mocha');
require('./test/.config');

const NEWLINE_REGEX = /\\n/igm

/**
 * execute mocha test for passed file
 * @param {String} testFile - test file glob to run
 * @returns {undefined}
 */
function runMochaTest(testFile) {
  if (!fs.existsSync(testFile)){
    console.error(testFile + ' Doesn\'t exist');
  }
  return gulp.src(testFile)
    .pipe(mocha({debug: true}))
    .on('error', function (error) {
      gulpUtil.log(error.message);
      if (error.stack) {
        gulpUtil.log(error.stack.replace(NEWLINE_REGEX, '\n'));
      }
    });
}

// mocha testing
gulp.task('test', function (){
  runMochaTest('./test/**/*.spec.js');
});

gulp.task('test:watch', ['test'], function (){
  gulpUtil.log('watching for changes');

  gulp.watch(['./test/**/*.spec.js'], function (file){
    var testFile = file.path.replace(__dirname, '.');
    gulpUtil.log('Running: ' + testFile);
    runMochaTest(testFile);
  });

  gulp.watch(['./src/**/*.js', './src/**/*.jsx'], function (file){
    var testFile = file.path.replace(__dirname, '.')
                        .replace('/src/', '/test/')
                        .replace(/\.jsx?$/, '.spec.js');
    gulpUtil.log('Running: ' + testFile);
    runMochaTest(testFile);
  });
});
