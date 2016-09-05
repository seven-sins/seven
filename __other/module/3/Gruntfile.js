module.exports = function(grunt) {
	
	grunt.initConfig({
		
		 pkg: grunt.file.readJSON('package.json'),

		 uglify : {
			 webqq : {
				 files : {
					 'build/main.min.js' : ['build/main.js']
 				 }
			 }
		 }
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');

  	grunt.registerTask('default', ['uglify']);

	
};