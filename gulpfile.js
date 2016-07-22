var gulp         = require('gulp'),
		browserSync  = require('browser-sync').create(),
		sass         = require('gulp-sass'),
		postcss      = require('gulp-postcss'),
		sourcemaps   = require('gulp-sourcemaps'),
		cssnext      = require("postcss-cssnext"),
    include      = require("gulp-include"),
		ghPages      = require('gulp-gh-pages');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		baseDir: "dist",
		proxy: "localhost/projects/totoro"
	});

	gulp.watch(["sass/*.scss", "sass/*/*.scss"], ['sass']);
	gulp.watch("*.html", ['html']);
	gulp.watch("fonts/*.*", ['fonts']);
	gulp.watch("*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
		.pipe(sass())
		.pipe(postcss([ cssnext() ]))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('fonts', function() {
	return gulp.src('fonts/*.*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('js', function() {
	return gulp.src('js/*.*')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(include())
			.on('error', console.log)
		.pipe(gulp.dest("dist/"));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['serve']);
