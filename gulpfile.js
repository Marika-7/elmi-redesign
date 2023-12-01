const { src, dest, watch, parallel, series } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const clean = require('gulp-clean');
const svgSprite = require('gulp-svg-sprite');

function html() {
  return src('src/pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('docs'));
}

function styles() {
  return src('src/styles/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  // .pipe(concat('main.min.css'))
  .pipe(dest('docs/styles'));
}

function scripts() {
  return src('src/scripts/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(uglify())
    .pipe(concat('main.js'))
    // .pipe(concat('main.min.js'))
    .pipe(dest('docs/scripts'));
}

function server() {
  browserSync.init({
    server: {
      baseDir: './docs'
    },
    notify: false
  });
  browserSync.watch('docs', browserSync.reload);
}

function deleteBuild(cb) {
  return src([
    'docs/**/*.*', 
    '!docs/fonts/*.*',
    '!docs/images/*.*',
    '!docs/robots.txt',
    '!docs/favicon.png'
  ])
    .pipe(clean());
}

function watching() {
  watch('src/pug/**/*.pug', html);
  watch('src/styles/**/*.scss', styles);
  watch('src/scripts/**/*.js', scripts);
}

function sprite() {
  return src('src/images/icons/*.svg')
    .pipe(svgSprite({
      // shape: {
      //   dimension: {
      //     precision: 2,
      //   },
      // },
      mode: {
        symbol: true,
      }
    }))
    .pipe(dest('src/images/icons'));
}

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.sprite = sprite;

exports.default = series(
  deleteBuild,
  parallel(html, styles, scripts),
  parallel(watching, server)
);
