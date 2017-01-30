var gulp = require("gulp"),//http://gulpjs.com/
	sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat');//https://www.npmjs.org/package/gulp-autoprefixer

gulp.task('default', ["sass", "watch"], function() {
  // place code for your default task here
});

gulp.task("sass", function(){
    gulp.src("./blocks/**/*.scss")
		.pipe(sass({ style: 'expanded' }))
					.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(concat('build.css'))
		.pipe(gulp.dest("./build"));
});

gulp.task("watch", function(){
	gulp.watch("./blocks/**/*.scss", ["sass"]);
});