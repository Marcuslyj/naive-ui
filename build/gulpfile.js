'use strict'
// 为啥用gulp打包styles
const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile () {
  return src('../styles/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(dest('../dist/lib/'))
}
// 拷贝字体文件
function copyfont () {
  return src('../styles/resources/**')
    .pipe(cssmin()) // 可以压缩字体？
    .pipe(dest('../dist/lib/resources/'))
}

exports.build = series(compile, copyfont)
