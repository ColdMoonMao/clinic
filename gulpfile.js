var gulp = require('gulp');
// var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
// 合并controllers
gulp.task('concat-controllers', function() {
	setTimeout(() => {
		return gulp.src(['www/js/controllers/base.js', 'www/js/controllers/*.js'])
			.pipe(concat('controllers.js'))
			// .pipe(uglify())
			.pipe(gulp.dest('www/js/'));
	}, 10)
});

// 合并services
gulp.task('concat-services', function() {
	return gulp.src(['www/js/services/base.js', 'www/js/services/*.js'])
		.pipe(concat('services.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('www/js/'));
});
//合并scss
gulp.task('concat-sass', function() {
	return gulp.src(['sass/!style.scss'])
		.pipe(concat('style.scss'))
		// .pipe(uglify())
		.pipe(gulp.dest('scss/'));
});
//sass---css
gulp.task('sass', ['concat-sass'], function(done) {
	gulp.src('./scss/style.scss')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(gulp.dest('./www/css/'))
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./www/css/'))
		.on('end', done);
});


// 浏览器重载 合并controller和services
gulp.task('js-watch', ['concat-controllers', 'concat-services'], () => {
	browserSync.reload();
});

//watch
gulp.task('watch', ['concat-controllers', 'concat-services', 'sass'], function() {
	// 从这个项目的根目录启动服务器
	browserSync.init({
		server: "./www/",
	});
	//监控js文件,变化后执行合并任务,合并完成刷新浏览器
	var watcher = gulp.watch(['www/js/**/*.js'], ['js-watch']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控sass文件,有变化 转换css
	gulp.watch('sass/*.scss', ['sass']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控css文件,有变化刷新浏览器.
	gulp.watch(['www/css/*.css'], browserSync.reload).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控html文件,有变化刷新浏览器.
	gulp.watch(['www/templates/*.html', 'www/index.html'], browserSync.reload).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});