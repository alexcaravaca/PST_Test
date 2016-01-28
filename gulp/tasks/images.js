var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
    config = require('../../config.json');


gulp.task('images', function() {
    return gulp.src('src/img/**')
    .pipe(imagemin({
        type: 7,
        progressive: true
    }))
    .pipe(gulp.dest('./build/img/'));
});


gulp.task('image-compress', function() {
    return gulp.src('src/img/**')
    .pipe(imagemin({
        type: 7
    }))
    .pipe(gulp.dest('./src/img/'));
});


gulp.task('version', function() {
    console.log(config.version);
});