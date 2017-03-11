/***********************************************************************************
 1. DEPENDENCIES
 /***********************************************************************************/

var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    clean = require("gulp-clean"),
    concat = require("gulp-concat"),
    inject = require('gulp-inject'),
    naturalSort = require('gulp-natural-sort'),
    es = require('event-stream'),
    mainBowerFiles = require("main-bower-files"),
    filter = require("gulp-filter"),
    browserSync = require ('browser-sync'),
    reload = browserSync.reload;

/*********************************************************************************
 2. FILE DESTINATIONS (RELATIVE TO ASSETS FOLDER)
 **********************************************************************************/

var target = {
    htmlSrc : 'app/index.html',
    sassSrc : 'app/scss/**/*.scss',
    resourceSrc : 'app/source/**/*',
    jsSrc : 'app/js/**/*',
    htmlDest : 'dist/',
    cssDest : 'dist/css',
    jsDest : 'dist/js',
    resourceDest : 'dist/source',
    fontDest : 'dist/font',
    dest : 'dist/'
};

/**********************************************************************************
 3. SASS TASK
 ***********************************************************************************/

gulp.task ('sass', function (){
    gulp.src(target.sassSrc)
        .pipe(sass({/*outputStyle: 'compressed'*/}).on('error', sass.logError))
        .pipe(gulp.dest(target.cssDest))
        .pipe(reload({stream:true}));
});

/**********************************************************************************
 6. html
 **********************************************************************************/

gulp.task("html", function() {
    gulp
        .src(target.htmlSrc)
        .pipe(gulp.dest(target.htmlDest))
        .pipe(reload({stream:true}));

});

/**********************************************************************************
 5. vendor
 **********************************************************************************/



/**********************************************************************************
 6. RESOURCE
 **********************************************************************************/

gulp.task("resource", function() {
    gulp
        .src(target.resourceSrc)
        .pipe(gulp.dest(target.resourceDest))
        .pipe(reload({stream:true}));

});

/**********************************************************************************
 7. javascript
 **********************************************************************************/

gulp.task("javascript", function() {
    gulp
        .src(target.jsSrc)
        .pipe(gulp.dest(target.jsDest))
        .pipe(reload({stream:true}));

});

/**********************************************************************************
 8. CLEAN
 **********************************************************************************/

gulp.task("clean", function() {
    gulp
        .src([target.dest], {read: false})
        .pipe(clean({force: true}));
});

/**********************************************************************************
 9. inject
 **********************************************************************************/

gulp.task('inject', function () {

    gulp.src(target.htmlSrc)
        .pipe(inject(gulp.src(mainBowerFiles({ debugging: true }), { base: 'bower_components' }), {
            name: 'bower',
            relative: true,
            ignorePath: '../dist/'
        }))
        .pipe(inject(es.merge(
            gulp.src(['dist/**/*.css', '!bower_components/**', '!dist/lib/**'], {read: false}),
            gulp.src(['dist/**/*.js', '!bower_components/**', '!dist/lib/**'], {read: false})
                .pipe(naturalSort())
        ), {ignorePath: '../dist/', relative: true}))
        .pipe(gulp.dest(target.dest));

});

/**********************************************************************************
 10. serve
 **********************************************************************************/

gulp.task('serve', ['resource', 'javascript', 'sass', 'html', 'inject'], function () {
    return browserSync.init({
        port : 3000,
        server: target.dest
    });
});

/**********************************************************************************
 11. watch
 **********************************************************************************/

gulp.slurped = false; // step 1

gulp.task("watch", function(){
    if(!gulp.slurped){ // step 2
        gulp.watch(['gulpfile.js'], ['serve']);
        gulp.watch(target.sassSrc, ['sass', 'inject']);
        gulp.watch(target.resourceSrc, ['resource', 'inject']);
        gulp.watch(target.jsSrc, ['javascript', 'inject']);
        gulp.watch(target.htmlSrc, ['html', 'inject']);
        gulp.slurped = true; // step 3
    }
});


/**********************************************************************************
 12. BUILD SEQUENCES
 **********************************************************************************/

gulp.task('default', ['serve', 'watch']);