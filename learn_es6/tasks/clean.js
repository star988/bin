import gulp from 'gulp';
import del from 'del';


gulp.task('clean',()=>{
	return del(['server/public','server/views']);
})