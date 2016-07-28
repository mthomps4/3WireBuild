module.exports = function(grunt){

//Configure Tasks
grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

    ngAnnotate: {
      build: {
        files: {
              'PREBUILD/min-safe/app.js' : ['app.js'],
              'PREBUILD/min-safe/controllers.js' : ['CONTROLLERS/controllers.js'],
              'PREBUILD/min-safe/directives.js' : ['DIRECTIVES/directives.js']
            }
      }//build
    },

    concat: {
      buildCSS: {
          src: ['CSS/normalize.css', 'CSS/main.css','CSS/index.css','CSS/blog.css','CSS/projects.css','CSS/querybreak.css'],
          dest: 'BUILD/compiled.css'
       },//buildCSS

       buildJS: {
           src: ['PREBUILD/min-safe/app.js', 'PREBUILD/min-safe/controllers.js', 'PREBUILD/min-safe/directives.js'],
           dest: 'BUILD/app.min.js'
       }
    },//concat

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
               'BUILD/styles.min.css' : 'PREBUILD/compiled.css'
            }
          }

       },//cssmin



   copy: {
     build:{
       files: [
         {expand: true, src: ['IMAGES/**'], dest: 'BUILD/'},
         {expand: true, src: ['TEMPLATES/**'], dest: 'BUILD/'},
         {expand: true, src: ['index.html'], dest: 'BUILD/', filter: 'isFile'},
         {expand: true, src: ['Posts.json*'], dest: 'BUILD/', filter: 'isFile'},
       ]
     }//copybuild
   }//copy

});//initConfig

//Load Plugins
grunt.loadNpmTasks('grunt-ng-annotate');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');
// https://github.com/gruntjs/grunt-contrib-copy#usage-examples

//Register Taks
grunt.registerTask('default',['ngAnnotate', 'concat', 'copy:build']);



}; //end module.export
