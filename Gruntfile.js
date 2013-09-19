/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			build: {
				command: '$CEYLON_HOME/bin/ceylon compile-js --rep=./../ceylon-js-interop/modules ceylon.examples.photogallery'
			}
		}
	});

	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec:build']);

};