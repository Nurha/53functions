var gulp = require('gulp'),
qunit = require('gulp-qunit');
gulp.task('test', function() {
return gulp.src('./Qunit_1_to_5.html')
    .pipe(qunit());
});
