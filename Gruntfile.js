const DBUtils = require('./DBUtils');

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    nodemon: {

      app: {
        script: 'app.js',
        PORT: '3000',
        ignore: ['node_modules/**'],
        options: {
          ext: 'js,json,erb',
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
          }
        }
      }

    },

    watch: {
      spec: {
        options: {
          spawn: false,
          interrupt: true
        },
        files: ['app/**/*.js', 'config/**/*.js'],
        tasks: ['shell:lab']
      },
    }

  }); // END grunt.initConfig

  // Task registration
  grunt.registerTask('serve',['nodemon:app']);
  grunt.registerTask('reset',['removeDB', 'seedDB']);

  grunt.registerTask('removeDB', 'Remove the database', function(){
    var done = this.async();
    DBUtils.removeAll(done);
  });

  grunt.registerTask('seedDB', 'Seed the database', function(){
    var done = this.async();
    DBUtils.seed(done);
  });

}