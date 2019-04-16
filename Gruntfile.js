
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    let pkg = grunt.file.readJSON('package.json');

    let license = `
/*
 * ${pkg.name} v${pkg.version}
 * https://github.com/ansiboy/services-sdk
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */
`;

    grunt.initConfig({
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
                external: ['maishu-chitu-service'],
                alias: [
                    "./node_modules/maishu-chitu-service/out/index:maishu-chitu-service"
                ]
            },
        },
        concat: {
            chitudts: {
                options: {
                    stripBanners: true,
                    banner: license
                },
                src: ['./dist/index.js'],
                dest: './dist/index.js'
            },

        },
        requirejs: {
            dev: {
                options: {
                    baseUrl: `./`,
                    include: ['./out/index.js'],
                    out: `dist/index.js`,
                    optimize: "none",
                    // namespace: 'maishu-services-sdk',
                    paths: {
                        "maishu-chitu-service": "empty:",
                        "maishu-services-sdk": "out/index.js"
                    },
                    shim: {
                    },

                },
            }
        },
        shell: {
            src: {
                command: `tsc -p src`
            },
            webpack: {
                command: `webpack`
            }
        }
    });

    grunt.registerTask('default', ['shell:src', 'shell:webpack']);
}