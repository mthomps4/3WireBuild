'use strict';

module.exports = function(grunt){

//Configure Tasks
grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

concat: {
  buildCSS: {
      src: ['DEV/CSS/normalize.css', 'DEV/CSS/main.css','DEV/CSS/index.css','DEV/CSS/blog.css','DEV/CSS/projects.css','DEV/CSS/querybreak.css'],
      dest: 'BUILD/styles.min.css'
   },//buildCSS

   buildJS: {
       src: ['DEV/app.js', 'DEV/CONTROLLERS/controllers.js', 'DEV/DIRECTIVES/directives.js'],
       dest: 'BUILD/app.min.js'
   }
},//concat


copy: {
 build:{
   files: [
       {expand: true, cwd: 'DEV/', src: ['IMAGES/**'], dest: 'BUILD/'},
       {expand: true, cwd: 'DEV/', src: ['TEMPLATES/**'], dest: 'BUILD/'},
       {expand: true, cwd: 'DEV/', src: ['index.html'], dest: 'BUILD/'},
       {expand: true, cwd: 'DEV/', src: ['Posts.json'], dest: 'BUILD/'}
  ]
 }//copybuild
},//copy


ngAnnotate: {
  build: {
    files: {
          'BUILD/app.min.js' : 'BUILD/app.min.js'
        }
  }//build
},

uglify: {
  build: {
    files: {
        'BUILD/app.min.js' : 'BUILD/app.min.js'
      }
  }//build
},//uglify




 cssmin: {
   options: {
         'processImport': false,
         shorthandCompacting: false,
         roundingPrecision: -1
       },
    target: {
      files: {
           'BUILD/styles.min.css' : 'BUILD/styles.min.css'
        }
      }
 }//cssmin

});//initConfig

//Load Plugins
grunt.loadNpmTasks('grunt-ng-annotate');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');

//Register Taks
grunt.registerTask('default',['concat', 'copy:build', 'ngAnnotate', 'uglify', 'cssmin']);



}; //end module.export
