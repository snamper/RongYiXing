const gulp = require('gulp'),
      sass = require('gulp-sass'),
      connect = require('gulp-connect'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('html', () => {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('javascript', () => {
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('styles', () => {
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error',sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(connect.reload());
});

gulp.task('images', () => {
    gulp.src('./src/images/*.*')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.scss', ['styles']);
    gulp.watch('./src/**/*.js', ['javascript']);
    gulp.watch('./src/**/*.html', ['html']);
});

gulp.task('server', () => {
    connect.server({
        root: './dist',
        livereload: true
    });
})

gulp.task('default',['server','watch'])
