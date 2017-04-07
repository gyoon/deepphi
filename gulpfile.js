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
    indexSrc : 'app/index.html',
    htmlSrc : 'app/front/*.html',
    adminSrc : 'app/admin/*.html',
    serviceSrc : 'app/service/*.html',
    sassSrc : 'app/scss/**/*.scss',
    resourceSrc : 'app/resource/**/**',
    jsSrc : 'app/js/**/*',
    htmlDest : 'dist/front',
    adminDest : 'dist/admin',
    serviceDest : 'dist/service',
    cssDest : 'dist/css',
    jsDest : 'dist/js',
    resourceDest : 'dist/resource',
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
        .src(target.indexSrc)
        .pipe(gulp.dest(target.dest))
        .pipe(reload({stream:true}));

    gulp
        .src(target.htmlSrc)
        .pipe(gulp.dest(target.htmlDest))
        .pipe(reload({stream:true}));

    gulp
        .src(target.adminSrc)
        .pipe(gulp.dest(target.adminDest))
        .pipe(reload({stream:true}));

    gulp
        .src(target.serviceSrc)
        .pipe(gulp.dest(target.serviceDest))
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

    //gulp.src(target.htmlSrc)
      //  .pipe(inject(gulp.src(mainBowerFiles({ debugging: true }), { base: 'bower_components' }), {
        //    name: 'bower',
          //  relative: false
            //ignorePath: '/../dist'
        //}))
        //.pipe(inject(es.merge(
            //gulp.src(['dist/**/*.css', '!bower_components/**', '!dist/lib/**', '!dist/css/admin.css'], {read: false}),
          //  gulp.src(['dist/js/index.js', '!bower_components/**', '!dist/lib/**'], {read: false})
            //    .pipe(naturalSort())
        //), {/*ignorePath: '../../dist/', */relative: false}))
        //.pipe(gulp.dest(target.htmlDest));

    //gulp.src(target.adminSrc)
        //.pipe(inject(gulp.src(mainBowerFiles({ debugging: true }), { base: 'bower_components' }), {
            //name: 'bower',
            //relative: false
            //ignorePath: '/../dist'
        //}))
        //.pipe(inject(es.merge(
            //gulp.src(['dist/**/*.css', '!bower_components/**', '!dist/lib/**', '!dist/css/app.css'], {read: false}),
          //  gulp.src(['dist/js/admin.js', '!bower_components/**', '!dist/lib/**'], {read: false})
            //    .pipe(naturalSort())
        //), {/*ignorePath: '../../dist/', */relative: false}))
        //.pipe(gulp.dest(target.adminDest));

});

/**********************************************************************************
 10. serve
 **********************************************************************************/

gulp.task('serve', ['resource', 'javascript', 'sass', 'html'], function () {
    return browserSync.init({
        port : 3000,
        server: "./dist",
        baseDir: "./",
        routes: {
            "/dist/": "../"
        }
        //server: target.dest
    });
});

/**********************************************************************************
 11. watch
 **********************************************************************************/

gulp.slurped = false; // step 1

gulp.task("watch", function(){
    if(!gulp.slurped){ // step 2
        gulp.watch(['gulpfile.js'], ['serve']);
        gulp.watch(target.sassSrc, ['sass']);
        gulp.watch(target.resourceSrc, ['resource']);
        gulp.watch(target.jsSrc, ['javascript']);
        gulp.watch(target.indexSrc, ['html']);
        gulp.watch(target.adminSrc, ['html']);
        gulp.watch(target.serviceSrc, ['html']);
        gulp.watch(target.htmlSrc, ['html']);
        gulp.slurped = true; // step 3
    }
});


/**********************************************************************************
 12. BUILD SEQUENCES
 **********************************************************************************/

gulp.task('default', ['serve', 'watch']);