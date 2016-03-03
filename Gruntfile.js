module.exports = function(grunt){

  grunt.initConfig({

    /**
    *
    * auto_install
    * Permet d'installer les packages depuis le package.json
    *
    */
    auto_install: {
      local: {},
      subdir: {
        options: {
          cwd: 'subdir',
          stdout: true,
          stderr: true,
          failOnError: true,
          npm: '--production'
        }
      }
    },


    /**
    *
    * sass
    * compile le scss en css
    *
    */
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'partials/style.css': 'style.scss'      // 'destination': 'source'
        }
      }
    },


    /**
    *
    * filesToJavascript
    * récupère le contenu des tout les fichiers du dossier partials
    * Met chaque fichier dans un index d'un objet dans build.js
    *
    */
    filesToJavascript: {
      default_options: {
        options: {
          inputFilesFolder : 'partials/',
          useIndexes : false,
          outputBaseFile : 'build-step/build-base.js',
          outputBaseFileVariable : 'buildsource',
          outputFile : 'build-step/build.js',
        }
      }
    },



    /**
    *
    * Concatenne les js
    *
    */
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['build-step/build.js', 'app.js'],
        dest: 'build.js',
      },
    },



    /**
    *
    *  Gestion des dépendances avec browserify
    *
    */
    browserify: {
      main: {
        src: 'build.js',
        dest: 'build.js'
      }
    },

    /**
    *
    * Ecoute les modifications dans les fichiers renseigné dans l'array files
    *
    */
    watch: {
      scripts: {
        files: ['app.js','partials/index.html','style.scss'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    }




  });


  grunt.loadNpmTasks('grunt-auto-install');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-files-to-javascript-variables');

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-browserify');

  // créer un ensemble de tache
  grunt.registerTask('default', ['sass','filesToJavascript','concat','browserify']);

};
