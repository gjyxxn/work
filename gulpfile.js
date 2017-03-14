/**
 * Created by lenovo on 2017/3/13.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    server = require('gulp-webserver');

gulp.task('sass',function(){
    gulp.src('css/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});
gulp.task('watch',function(){
    gulp.watch('css/style.sass',['sass'])
});
gulp.task('server',['watch'],function(){
    gulp.src('./')
        .pipe(server({
            open:true,
            livereload:true
        }))
});