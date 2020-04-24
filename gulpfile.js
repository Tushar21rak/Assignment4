'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('rename');
var changed = require('changed');


var SCSS_SRC = './src/JSX/SCSS/**/*.scss';
var SCSS_DEST = './src/JSX/CSS';

gulp.task('compile_scss', function () {
    gulp.src(SCSS_SRC)
        .pipe(sass().on('error',sass.logError()))
        .pipe(minifyCSS())
        .pipe(minifyCSS())
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch_scss', function () {
    gulp.watch(SCSS_SRC,gulp.series('compile_scss'));
});

gulp.task('default', gulp.series('watch_scss'))