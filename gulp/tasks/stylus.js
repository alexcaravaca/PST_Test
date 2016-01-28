var gulp = require('gulp'),
	stylus = require('gulp-stylus');
 
// Get one .styl file and render 
gulp.task('stylus', function () {
	gulp.src('./src/styles/pages/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('stylus-min', function () {
    gulp.src('./src/styles/pages/*.styl')
    .pipe(stylus({
        compress: true
    }))
    .pipe(gulp.dest('./build/css/'));
});