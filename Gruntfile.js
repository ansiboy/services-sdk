module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    let pkg = grunt.file.readJSON('package.json');

    let license = `
/*
 * SERVICE SDK v${pkg.version}
 * https://github.com/ansiboy/services-sdk
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */`;

    grunt.initConfig({
        babel: {
            source: {
                options: {
                    sourceMap: false,
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                "targets": {
                                    "browsers": [
                                        "ie >= 11"
                                    ]
                                }
                            }
                        ]
                    ]
                },
                files: [{
                    expand: true,
                    cwd: `out/es6`,
                    src: [`**/*.js`],
                    dest: `out/es5/`
                }]
            }
        },
        browserify: {
            dist: {
                files: {
                    'dist/index.js': ['out/index.js']
                }
            },
            options: {
                browserifyOptions: {
                    standalone: 'service-sdk',
                },
                banner: license,
                external: ['maishu-chitu', 'maishu-ui-toolkit'],
                alias: [`./lib/socket.io.js:socket.io`]
            },
        },
        // copy: {
        //     dist: {
        //         files: [
        //             { expand: true, cwd: 'out/es6', src: ['**/*.d.ts'], dest: 'dist/', filter: 'isFile' },
        //         ]
        //     }
        // },
        shell: {
            src: {
                command: `tsc -p src`
            }
        }
    });

    grunt.registerTask('default', ['shell', 'browserify']);// 'babel', 
}