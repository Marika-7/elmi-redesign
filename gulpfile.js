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
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

const to_wp = 'C:/OSPanel/domains/elmi/wp-content/themes/elmi2/assets';

function html() {
  return src('src/pug_styles/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('docs'));
}

function styles() {
  return src('src/pug_styles/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  // .pipe(concat('main.min.css'))
  .pipe(dest('docs/css'));
  // .pipe(dest('C:/OSPanel/domains/elmi/wp-content/themes/elmi2/assets/css'));
}

function scripts() {
  return src('src/scripts/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(uglify())
    .pipe(concat('main.js'))
    // .pipe(concat('main.min.js'))
    .pipe(dest('docs/js'));
    // .pipe(dest('C:/OSPanel/domains/elmi/wp-content/themes/elmi2/assets/js'));
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
    '!docs/images/**/*.*',
    '!docs/robots.txt',
    '!docs/favicon.png',
    '!docs/js/jquery-3.7.1.min.js',
    '!docs/js/slick.min.js',
  ])
    .pipe(clean());
}

function watching() {
  watch('src/pug_styles/**/*.pug', html);
  watch('src/pug_styles/**/*.scss', styles);
  watch('src/scripts/**/*.js', scripts);
}

function sprite() {
  return src('src/images/icons/*.svg')
    .pipe(svgSprite({
      shape: {
        dimension: {
          precision: 2,
        },
      },
      mode: {
        // symbol: true,
        view: true,
      }
    }))
    .pipe(dest('src/images/icons'));
}

function images() {
  return src('src/images/*.*')
    .pipe(newer('docs/images'))
    .pipe(webp())
    .pipe(src([
      'src/images/*.webp',
      'src/images/*.svg'
    ]))
    .pipe(newer('docs/images'))
    .pipe(imagemin())
    .pipe(dest('docs/images'));
}

function fonts() {
  return src('src/fonts/*.*')
    .pipe(fonter({
      formats: ['woff', 'ttf']
    }))
    .pipe(src('src/fonts/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest('docs/fonts'));
}

function wp_html() {
  return src('docs/*.html')
  .pipe(dest(to_wp));
}

function wp_css() {
  return src('docs/css/*.css')
  .pipe(dest(to_wp + '/css'));
}

function wp_js() {
  return src('docs/js/*.js')
  .pipe(dest(to_wp + '/js'));
}

function wp_image() {
  return src('docs/images/*.*')
  .pipe(newer(to_wp + '/images'))
  .pipe(dest(to_wp + '/images'));
}

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.sprite = sprite;
exports.images = images;
exports.fonts = fonts;
exports.wp = parallel(wp_html, wp_css, wp_js, wp_image);
exports.wp_css = wp_css;

exports.default = series(
  deleteBuild,
  parallel(html, styles, scripts),
  parallel(watching, server)
);
