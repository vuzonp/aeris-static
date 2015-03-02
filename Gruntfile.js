module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>, Thomas Girard | http://opensource.org/licenses/MIT */\n'
            },
            my_target: {
                files: {
                    'static/js/aeris.min.js': [
                        'src_static/js/menu.js'
                    ]
                }
            }
        },
        less: {
            default: {
                options: {
                    paths: ["src_static/less"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                    ],
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>, Thomas Girard | http://opensource.org/licenses/MIT */\n',
                    cleancss: true,
                    compress: true,
                },
                files: {
                    "static/css/aeris.min.css": "src_static/less/makeup.less"
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less']);

};
