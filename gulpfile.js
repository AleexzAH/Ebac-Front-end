const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    console.log('Iniciando a tarefa Sass...');
  return gulp.src('./source/styles/main.scss') // Apenas o main.scss
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Compila o SASS e trata erros
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles')); // Pasta de saída
    console.log('Sass compilado e minificado com sucesso!');
}


function funcaoPadrao (callback){
    console.log("Executando via gulp");
    callback();
}


exports.default = function(){
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));

    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));

    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));

}