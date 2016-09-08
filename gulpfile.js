const gulp = require('gulp');
const liveServer = require('gulp-live-server');
const browserSync = require('browser-sync');

gulp.task('live-server', () => {
	const server = new liveServer('server/main.js');
	server.start();
});

gulp.task('serve', ['live-server'], () => {
	browserSync.init(null, {
		proxy: "http://localhost:7777",
		port: 9001
	})
});
