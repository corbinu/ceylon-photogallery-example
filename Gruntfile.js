/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			build: {
				command: '$CEYLON_HOME/bin/ceylon compile-js assets/js/helpers.js ceylon.examples.photogallery'
			}
		}
	});

	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec:build']);

};