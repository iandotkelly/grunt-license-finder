/*
 * grunt-license-finder
 * https://github.com/iandotkelly/grunt-license-finder
 *
 * Copyright (c) 2014 Ian Kelly
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js'
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		// Test config
		license_finder: {
			default_options: {
				options: {
					production: false,
					directory: process.cwd(),
					csv: false,
					out: 'license.txt'
				}
			}
		},
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', [ 'license_finder' ]);

	grunt.registerTask('default', [ 'jshint' ]);

};
