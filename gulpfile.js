const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const clean = require('gulp-clean')
const gulpSequence = require('gulp-sequence')
const watch = require('gulp-watch')

/**
* SEQUENCES / TASK ENTRY POINTS
*/
gulp.task('build', gulpSequence(
  'cleanTmp',
  'staticAssets',
  ['packageJson', 'bootMain'],
  ['browser-styles', 'browser-scripts', 'browser-views'],
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

gulp.task('staticAssets', function(){
  return gulp.src([
      'src/browser/assets/images/**/*',
      'src/browser/html/**/*',
      'src/data/**/*',
    ], {base: "./src"})
    .pipe(gulp.dest('build/tmp'))
})

gulp.task('packageJson', function(){
  return gulp.src('package.json').pipe(gulp.dest('build/tmp'))
})

gulp.task('bootMain', function(){
  gulp.src('src/boot.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('build/tmp'))
})

/**
* COMPILE SOURCES FOR THE MAIN BROWSER
*/

gulp.task('browser-styles', function(){
  return gulp.src('src/browser/assets/scss/**/*.scss', {base: "./src"})
    .pipe(sass())
    .pipe(gulp.dest('build/tmp/browser/assets/css'))
})

gulp.task('browser-scripts', function(){
  return gulp.src([
      'src/browser/controllers/**/*.js',
      'src/browser/lib/**/*.js',
    ], {base: "./src"})
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('build/tmp'))
})

gulp.task('browser-views', function(){
  return gulp.src([
      'src/browser/views/**/*.js',
    ], {base: "./src"})
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('build/tmp'))
})


/**
* COMPILE SOURCES FOR PLUGINS AND THEMES
*/

gulp.task('plugins', function(done){
  done()
})

gulp.task('themes', function(done){
  done()
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
