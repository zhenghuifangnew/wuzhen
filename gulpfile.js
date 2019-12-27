//var gulp = require('gulp');
var gulp = require('gulp');
var load = require('gulp-load-plugins')();
var browser = require('browser-sync').create();
// var browser = require('browser-sync').create()
// var uglify = require('gulp-uglify')
// var minifyCss= require('gulp-minify-css')
// var minifyHtml = require('gulp-minify-html')
// var babel = require('gulp-babel')
// var rename = require('gulp-rename')
// var imagemin = require('gulp-imagemin')


var concat = require('gulp-concat');
//如果运行gulp没有指定任务名,默认执行default任务
//gulp:src,dest,watch,task

// gulp.task('init',function(done){
// 	// gulp.src('./src/index.html')
// 	// .pipe(gulp.dest('./dist/'))

// 	// gulp.src(['./src/js/one.js','./src/js/two.js','./src/js/index.js'])
// 	// gulp.src('./src/**')
// 	// .pipe(gulp.dest('./dist/'))
// 	// done();
// });


// gulp.task('js',function(done){
// 	gulp.src('./src/js/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('./dist/js/'))
// 	done()
// })
// .pipe(load.concat('all.min.js'))
gulp.task('js',function(done){
	gulp.src('./src/js/*.js')
	.pipe(load.babel({
		'presets':['@babel/env']
	}))
	.pipe(load.uglify())
	.pipe(gulp.dest('./dist/js/'))
	done()
})
	// .pipe(load.rename('index.min.css'))
gulp.task('css',function(done){
	gulp.src('./src/css/*.css')
	.pipe(load.minifyCss())
	.pipe(gulp.dest('./dist/css/'))
	done()
})
gulp.task('sass',function(done){
	gulp.src('./src/sass/*.scss')
	.pipe(load.sass())
	.pipe(gulp.dest('./dist/css/'))
	done()
});
gulp.task('html',function(done){
	gulp.src('./src/*.html')
	.pipe(load.minifyHtml())	
	.pipe(gulp.dest('./dist/'))
	done()
})
 gulp.task('image',function(done){
 	gulp.src('./src/img/**')
 	.pipe(load.imagemin())
 	.pipe(gulp.dest('./dist/img/'))
 	done()
 })

gulp.task('save',gulp.series(gulp.parallel('html','js','css','sass','image'),function(done){
		browser.reload()
		done()
}))

gulp.task('server',gulp.series(gulp.parallel('html','js','css','sass','image'),function(done){
	browser.init({
		server:'./dist/',
		port:9090
	})
	gulp.watch('./src/',gulp.series('save'))
	done()
}))
