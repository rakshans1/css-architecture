const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano  = require('gulp-cssnano');

const path = require('path');

var browserSync = require('browser-sync').create();

const SASS_INCLUDE_PATHS = [
  path.join(__dirname, '/node_modules/breakpoint-sass/stylesheets'),
  path.join(__dirname, '/node_modules/breakpoint-slicer/stylesheets'),
  path.join(__dirname, '/node_modules/ress'),
  path.join(__dirname, '/node_modules/bootstrap/scss/')
];

gulp.task('build', function () {
  return gulp.src('assets/styles/main.scss')
    .pipe(sass({ includePaths: SASS_INCLUDE_PATHS }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano({
      discardComments: {removeAll: true}
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./public"
  });

  gulp.watch("assets/styles/**/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("assets/styles/*.scss")
      .pipe(sass({ includePaths: SASS_INCLUDE_PATHS }).on('error', sass.logError))
      .pipe(gulp.dest("public/css"))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);