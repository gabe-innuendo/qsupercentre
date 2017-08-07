var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var minCss = require('gulp-minify-css')
var rename = require('gulp-rename')

var config = {
   srcCss : 'src/css/**/*.scss',
   buildCss: 'build/css'
}

gulp.task('build-css', function (cb) {
  gulp.src(config.srcCss)

    // Output non-minified CSS file
    .pipe(sass({
      outputStyle : 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.buildCss))

    // Minify the CSS file
    .pipe(minCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.buildCss))

    cb()

})

gulp.task('watch', function(cb) {
   gulp.watch(config.srcCss, ['build-css']) 
})

gulp.task('default', ['build-css', 'watch'])
