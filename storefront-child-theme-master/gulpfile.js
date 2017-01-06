//Storefront Child Theme

var gulp = require('gulp');

gulp.task('hello', function(){
    console.log('Hello Nate');
});



var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('sass', function(){
    return gulp.src('assets/sass/**/*.scss') //Gets all files
        .pipe(sass()) //Using gulp-sass
        .pipe(gulp.dest(""))
        .pipe(browserSync.reload({
            stream: true
    }))
});

//Syncs the browser to auto refresh on file save, and process all sass into css
gulp.task('watch', ['browserSync', 'sass'], function(){
    // Gulp watch syntax
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    //Reloads the browser whenever HTML or JS files change
    gulp.watch('*.php', browserSync.reload);
    gulp.watch('assets/js/**/*.js', browserSync.reload)
    //other watchers
    });


//This tells browserSync where to load the files fron into the browser
gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "http://localhost:8888/m420c"
    });
});




//Combine all build tasks
var runSequence = require('run-sequence');

gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
               callback
               )
})