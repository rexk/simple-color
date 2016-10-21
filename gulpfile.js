const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('flow-typed', () =>
  gulp.src('./src/**/*.js')
    .pipe(rename(path => {
      path.extname = '.js.flow';
    }))
    .pipe(gulp.dest('./lib'))
);
