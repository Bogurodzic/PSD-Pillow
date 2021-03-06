var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');





gulp.task("clean", function(){

	return del("build/");

});

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
    	.pipe(plugins.plumber())
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task("autoprefixer", function(){

	gulp.src("src/css/styles.css")
	.pipe(plugins.plumber())
	.pipe(plugins.autoprefixer({
		browsers: ['last 15 versions', "IE 9"]
	})).pipe(gulp.dest("build/css/"));

});

gulp.task("html", function(){

	 return gulp.src("src/*.html")
		.pipe(plugins.useref())
		.pipe(plugins.if("*.js", plugins.uglify()))
		.pipe(gulp.dest("build/"));

});

gulp.task("copy", function(){

	return gulp.src(["src/fonts/*", "src/css/*", "src/img/*"], {
		base: "src/"
	})
	.pipe(gulp.dest("build/"));

});

gulp.task("images", function(){

	return gulp.src("dist/images/*", {
		base: "dist/"
	})
	.pipe(plugins.imagemin())
	.pipe(gulp.dest("dist/"));

});

gulp.task("watch", function(){

	gulp.watch("src/scss/*.scss", ["sass"]);
	gulp.watch("src/css/*.css", ["autoprefixer"]);
	gulp.watch(["src/css/*.css", "src/index.html", "src/js/*.js"], browserSync.reload);

});

gulp.task("build:server", function(){

	browserSync.init({
		server: "src/"
	});

});

gulp.task("build", function(){

	runSequence("clean", "sass", "copy", "autoprefixer", "html", "images");

});

gulp.task("server", ["watch", "build:server"]);