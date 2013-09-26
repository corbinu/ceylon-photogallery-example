/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			build: {
				command: '$CEYLON_HOME/bin/ceylon compile-js --rep=./../ceylon-js-interop/modules ceylon.examples.photogallery'
			},
			build_interop: {
				command: 'grunt',
				cwd: '../ceylon-js-interop'
			},
			flatten: {
				command: 'node r.js -o build.js optimize=none'
			}
		},
		clean: {
			interop: ['modules/ceylon/js']
		},
		copy: {
			interop: {
				files: [
					{expand: true, src: ['**'], cwd: '../ceylon-js-interop/modules/ceylon/js', dest: 'modules/ceylon/js/'}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['exec:build_interop', 'clean:interop', 'copy:interop', 'exec:build', 'exec:flatten']);

};