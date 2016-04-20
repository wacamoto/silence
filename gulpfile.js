var gulp = require('gulp')
var twig = require('gulp-twig')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var minifyCss = require('gulp-minify-css')
var rename = require('gulp-rename')


gulp.task('scss', function() {
    gulp.src('./src/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('./dist'))
})


gulp.task('minify', function() {
    gulp.src('./dist/silence.css')
    .pipe(minifyCss({keepSpecialComments : 0}))
    .pipe(rename('silence.min.css'))
    .pipe(gulp.dest('./dist'))
})


gulp.task('concat', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.min.js', './js/*.js'])
    .pipe(concat('silence.js'))
    .pipe(gulp.dest('./dist'))
})


gulp.task('twig', function() {
    gulp.src('./reference/src/*.twig')
    .pipe(twig())
    .pipe(gulp.dest('./reference'))
})


gulp.task('watch', function() {
    gulp.watch('./src/*.scss', ['scss'])
    gulp.watch('./js/*.js', ['concat'])
    gulp.watch('./reference/src/*.twig', ['twig'])
})


gulp.task('default', ['scss', 'minify', 'concat', 'twig', 'watch'])
