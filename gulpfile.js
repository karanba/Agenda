var gulp = require("gulp");
var uglify = require("gulp-uglify");
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("scripts", function(){
    
});


gulp.task('default', function() {
   return tsProject.src()
        .pipe(uglify())
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});