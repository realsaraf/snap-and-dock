
'use strict';

var files = {
    js: ['*.js'],
    html: ['*.html']
};

module.exports = function(grunt) {
    //load all npm tasks automagically
    console.log(__dirname);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            js: {
                files: files.js,
                tasks: ['jshint', 'jsbeautifier']
            },
            html: {
                files: files.js,
                tasks: ['htmllint', 'prettify'],
            },
        },

        jshint: {
            files: files.js,
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        htmllint: {
            all: {
                options: {
                    ignore: []
                },
                src: files.html,
            }
        },

        jsbeautifier: {
            files:  files.js,
            options: {
                js: {
                    braceStyle: 'collapse',
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: ' ',
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            }
        },

        prettify: {
          all: {
            expand: true,
            cwd: './',
            src: files.html[0]
          }
        }

    });

    grunt.registerTask('serve', function() {
        return grunt.task.run(['watch']);
    });

};
