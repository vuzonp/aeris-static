module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            default: {
                dest: 'dist/',
                js_dest: 'dist/js',
                css_dest: 'dist/css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>, <%= pkg.author %> | http://opensource.org/licenses/MIT */\n'
            },
            my_target: {
                files: {
                    'dist/js/aeris.min.js': [
                        'src/js/main.js'
                    ]
                }
            }
        },
        less: {
            default: {
                options: {
                    paths: ["src/less"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                    ],
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>, <%= pkg.author %> | http://opensource.org/licenses/MIT */\n',
                    cleancss: true,
                    compress: true,
                },
                files: {
                    "dist/css/aeris.min.css": "src/less/makeup.less"
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less']);

};
