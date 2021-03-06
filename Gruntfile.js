'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: [
				'Gruntfile.js',
				'server/*.js',
				'bin/*.js',
				'test/*.js'
			],
			options: {
				globals: {
					exports: true,
					Promise: true,
					require: true,
					module : true,
					console : true
				},
				esnext :true,
				node: true,
			}
		},
		jscs: {
			files: [
				'Gruntfile.js',
				'server/*.js',
				'bin/*.js',
				'test/*.js'
			],
			options: {
				config: ".jscsrc",
				esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
				verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
				fix: true, // Autofix code style violations when possible.
				requireCurlyBraces: [ "if" ]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks("grunt-jscs");
	grunt.registerTask('default', ['uglify','concat','qunit','jshint']);
};