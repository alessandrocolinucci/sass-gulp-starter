
const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browsersync = require('browser-sync').create();

// COMPILE STYLES
function compileSASS() {
    return gulp.src('./src/scss/**/*.scss')
               .pipe(sass())
               .pipe(gulp.dest('./src/css'))
               .pipe(browsersync.stream());
}

// WATCH UPDATES
function watch() {
    browsersync.init({
        server: {
            baseDir: './src'
        },
        port: 3000
    });

    gulp.watch('./src/scss/**/*.scss', compileSASS);
    gulp.watch('./src/**/*.html').on('change', browsersync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browsersync.reload);
}


exports.compileSASS = compileSASS;
exports.watch       = watch;