var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var cssnext      = require("postcss-cssnext");

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		proxy: "localhost/projects/totoro"
	});

	gulp.watch(["sass/*.scss", "sass/*/*.scss"], ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(postcss([ cssnext() ]))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());

});

gulp.task('default', ['serve']);
