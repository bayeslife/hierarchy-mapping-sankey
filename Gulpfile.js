var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var debug = require('debug')('build');
var del = require('del');

var watch = require('gulp-watch');
var yargs = require('yargs');
var gulpdebug = require('gulp-debug');

var util = require('gulp-util');

var processor = require('./src/js/gulp-process.js');

console.log(process.argv);

var pkg = require('./package.json');
var args = yargs
    .usage(pkg.description + "\n\n$0 -s [source directory] -o [target directory]")
    .version(pkg.version, 'version')
    .demand('t')
    .alias('t', 'target')
    .describe('t', 'Target directory')
    .demand('s')
    .alias('s', 'source')
    .describe('s', 'Source directory')
    .parse(process.argv);

var sourceFolder = args['s'];
var destFolder= args['t'];



gulp.task('json',function() {
  var watchpath = path.join(sourceFolder,'/**/*.json');
  console.log("Watching "+ watchpath);
  return watch([watchpath])
   .pipe(processor(destFolder))
})

gulp.task('default',['json']);
