const gulp = require('gulp');
const sass = require('gulp-sass')

function style(){
  return gulp.src('./app/sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('./app/public/stylesheet'))
}
exports.style = style;