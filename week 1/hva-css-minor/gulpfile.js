'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');

gulp.task('build/admin', function() {

    var scssStream = gulp.src('src/sass/patterns/*.scss')
    .pipe(sass())
        .pipe(concat('scss-files.scss'))
    ;

    // var cssStream = gulp.src([...])
    // .pipe(concat('css-files.css'))
    // ;

    var mergedStream = merge(scssStream)
        .pipe(concat('styles.css'))
        // .pipe(minify())
        .pipe(gulp.dest('build/css'));

    return mergedStream;
});

gulp.task('default', ['build/admin']);