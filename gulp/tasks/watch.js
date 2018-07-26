var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('html', function(){
   console.log("HTML"); 
});

gulp.task('watch', function(){
   
    watch("./app/assets/styles/**/*.css", function(){
       gulp.start('styles'); 
    });
    
    watch('./app/assets/scripts/**/*.js', function(){
       gulp.start('scripts'); 
    });
});