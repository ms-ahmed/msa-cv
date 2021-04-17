const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	postcss = require('gulp-postcss'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	changed = require('gulp-changed'),
	uglify = require('gulp-uglify'),
	lineec = require('gulp-line-ending-corrector'),
	zip = require('gulp-zip'),
	minify = require('gulp-minify'),
	STYLE_SRC = 'src/assets/scss/*.scss',
	STYLE_DEST = './src/',
	IMG_SRC = './src/assets/images/*',
	IMG_DEST = './public/min-image';

//The server function to reload
function reload(done) {
	browserSync.reload();
	done();
}

//compile sass
function style() {
	var processors = [autoprefixer, cssnano];
	return gulp
		.src(STYLE_SRC)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(STYLE_DEST))
		.pipe(browserSync.stream());
}
function watch() {
	gulp.watch(STYLE_SRC, gulp.series(style, reload));
}
function image() {
	return (
		gulp
			.src(IMG_SRC)
			.pipe(minify({ noSource: true }))
			/* .pipe(zip('archive.zip')) */
			.pipe(gulp.dest(IMG_DEST))
	);
}

//Building task
//var build = gulp.series(files, gulp.parallel(serve, watch));

gulp.task('default', watch);
gulp.task('image', image);
