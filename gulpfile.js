var gulp = require('gulp');
// var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
// 合并controllers
gulp.task('concat-controllers', function() {
	gulp.src(['www/js/controllers/base.js', 'www/js/controllers/*.js'])
		.pipe(concat('controllers.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('www/js/'));
});

// 合并services
gulp.task('concat-services', function() {
	gulp.src(['www/js/services/base.js', 'www/js/services/*.js'])
		.pipe(concat('services.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('www/js/'));
});
//合并directives
gulp.task('concat-directives', function() {
	gulp.src(['www/js/directives/base.js', 'www/js/directives/*.js'])
		.pipe(concat('directives.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('www/js/'));
});
//合并filters
gulp.task('concat-filters', function() {
	gulp.src(['www/js/filters/base.js', 'www/js/filters/*.js'])
		.pipe(concat('filters.js'))
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


//watch
gulp.task('watch', ['concat-controllers', 'concat-services', 'concat-directives', 'concat-filters', 'sass'], function() {
	// 从这个项目的根目录启动服务器
	browserSync.init({
		server: "./www/",
	});
	//监控controllers文件夹文件,变化后执行合并任务
	gulp.watch('www/js/controllers/*.js', ['concat-controllers']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控services文件夹文件,变化后执行合并任务
	gulp.watch('www/js/services/*.js', ['concat-services']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控directives文件夹文件,变化后执行合并任务
	gulp.watch('www/js/directives/*.js', ['concat-directives']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控filters文件夹文件,变化后执行合并任务
	gulp.watch('www/js/filters/*.js', ['concat-filters']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控js文件刷新浏览器
	var watcher = gulp.watch(['www/js/*.js'], function() {
		browserSync.reload();
	});
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控sass文件,有变化 转换css
	gulp.watch('sass/*.scss', ['sass']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控css文件,有变化刷新浏览器.
	gulp.watch(['www/css/*.css'], function() {
		browserSync.reload();
	}).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
	//监控html文件,有变化刷新浏览器.
	gulp.watch(['www/templates/*.html', 'www/index.html'], function() {
		browserSync.reload();
	}).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});