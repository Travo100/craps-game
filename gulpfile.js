var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function(){
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 1337
    }));
});

gulp.task('sass', function(){
  return sass('sass/')
    .on('error', function(err){
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
  gulp.watch('sass/*.sass', ['sass']);
  gulp.watch('css/*.css');
  gulp.watch('*.js');
});

gulp.task('default', ['webserver', 'watch']);