const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const clean = require('gulp-clean')
const gulpSequence = require('gulp-sequence')
const watch = require('gulp-watch')
const flatten = require('gulp-flatten')

/**
* SEQUENCES / TASK ENTRY POINTS
*/
gulp.task('build', gulpSequence(
  'cleanTmp',
  ['package', 'boot', 'static', 'scripts'],
  ['plugins', 'themes']
))

gulp.task('dist', gulpSequence(
  'cleanDist',
  'prod',
  'build'
))

/**
* BASE BUILD TASKS
*/

gulp.task('cleanTmp', function(){
  return gulp.src('build/tmp').pipe(clean({ force: false }))
})

gulp.task('package', function(){
  return gulp.src('package.json').pipe(gulp.dest('build/tmp'))
})

gulp.task('boot', function(){
  gulp.src('src/boot.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('build/tmp'))
})

gulp.task('static', function(){
  return gulp.src([
      'src/browser/assets/images/**/*',
      'src/browser/assets/html/**/*'
    ], {base: "./src"})
    .pipe(gulp.dest('build/tmp'))
})

gulp.task('scripts', function(){
  return gulp.src([
      'src/browser/renderer.js',
      'src/browser/library/**/*.js',
      'src/browser/controllers/**/*.js',
      'src/browser/views/**/*',
    ], {base: "./src"})
    .pipe(babel({ presets: ['es2015', 'react'] }))
    .pipe(gulp.dest('build/tmp'))
})

gulp.task('plugins', function(done){
  return gulp.src('src/plugins/*/dist/*.js')
    .pipe(flatten())
    .pipe(gulp.dest('build/tmp/plugins/'));
})

gulp.task('themes', function(done){
  return gulp.src('src/themes/*/dist/*.js')
    .pipe(flatten())
    .pipe(gulp.dest('build/tmp/themes/'));
})


/**
* DEVELOPMENT TASKS
*/

// gulp.task('watch', function () {
//   watch([ 'src/**/*' ], 'build')
// })


/**
* DISTRIBUTABLE BUILD TASKS
*/

gulp.task('prod', function(){
  console.log('PRODUCTION ENVIRONMENT')
  process.env.NODE_ENV = 'production'
})

gulp.task('cleanDist', function(){
  return gulp.src('build/dist').pipe(clean({ force: true }))
})
