var gulp = require('gulp');
var bless = require('gulp-bless');
var notify = require('gulp-notify');
var elixir = require('laravel-elixir');
var path = require('path');

elixir.extend('bless', function(src, options) {
    src = src || 'public/css/**/*.css';

    options = options || {};

    var onError = function(err) {
        notify.onError({
            title: 'Laravel Bless',
            subtitle: 'Bless failed.',
            message: '<%= error.message %>',
            icon: path.join(__dirname, '../laravel-elixir/icons/fail.png')
        })(err);

        this.emit('end');
    };

    gulp.task('bless', function() {
        return gulp.src(src)
                   .pipe(bless(options))
                   .on('error', onError)
                   .pipe(notify({
                        title: 'Laravel Bless',
                        message: 'Blessed CSS',
                        icon: path.join(__dirname, '../laravel-elixir/icons/pass.png'),
                        onLast: true
                   }));
    });

    this.registerWatcher('bless', src);

    return this.queueTask('bless');
});
