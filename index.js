var gulp = require('gulp');
var bless = require('gulp-bless');
var notify = require('gulp-notify');
var path = require('path');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('bless', function(src, outputDir, options) {
    src = src || './public/css/**/*.css';

    if (typeof outputDir == 'object') {
        options = outputDir;
        outputDir = './public/blessed';
    }  else if (outputDir == undefined) {
        outputDir = './public/blessed';
        options = {};
    } else {
        options = options || {};
    }

    var onError = function(err) {
        notify.onError({
            title: 'Laravel Bless',
            subtitle: 'Bless failed.',
            message: '<%= error.message %>',
            icon: path.join(__dirname, '../laravel-elixir/icons/fail.png')
        })(err);

        this.emit('end');
    };

    new Task('bless', function() {
        return gulp.src(src)
                   .pipe(bless(options))
                   .pipe(gulp.dest(outputDir))
                   .on('error', onError)
                   .pipe(notify({
                        title: 'Laravel Bless',
                        message: 'Blessed CSS',
                        icon: path.join(__dirname, '../laravel-elixir/icons/pass.png'),
                        onLast: true
                   }));
    })
    .watch('./app/**');
});
