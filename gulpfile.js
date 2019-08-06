const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./app/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./app/public/stylesheet'));
}
function watch() {
  gulp.watch('./app/sass/**/*.sass', style);
}
exports.style = style;
exports.watch = watch;
