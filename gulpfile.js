const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss'); //purgecss removes unused css base in the html while compiling

//compile sass to css
function compileSass() {
    return src('./src/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ //purgecss removes unused css base in the html while compiling
            content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
        }))
        .pipe(dest('./src/sass/css'));
}

//watch for changes
function watchTask() {
    watch(['./src/sass/**/*.scss', './src/components/**/*.tsx', './src/pages/**/*.tsx'], compileSass);
}

//run the function just typing gulp in the terminal
exports.default = series(compileSass, watchTask);