
const PATH_BUILD_ICONS = './build/icons',
    PATH_DIST_FONTS = './dist/fonts',
    PATH_DIST_STYLES = './dist/styles',
    PATH_DIST_HTML = './dist/html';

const SKETCH_FILE_DEF = 'mc-icons-iconset.sketch';


module.exports = function (grunt) {

    let sketch_file = grunt.option('file');

    if (sketch_file === undefined || sketch_file === true) {
        sketch_file = SKETCH_FILE_DEF;
    }

    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        sketch_export: {
            run: {
                options: {
                    type: 'slices',
                    scales: [1.0],
                    formats: ['svg']
                },
                src: sketch_file,
                dest: PATH_BUILD_ICONS
            }
        },
        webfont: {
            run: {
                src: PATH_BUILD_ICONS + '/*.svg',
                dest: PATH_DIST_FONTS,
                destCss: PATH_DIST_STYLES,
                destScss: PATH_DIST_STYLES,
                options: {
                    relativeFontPath: PATH_DIST_FONTS,
                    stylesheets: ['less', 'scss'],
                    htmlDemo: true,
                    destHtml: PATH_DIST_HTML,
                    template: 'template.css',
                    fontFamilyName: 'PT Mosaic Icons',
                    font: 'Mosaic',
                    version: '2.5.0',
                    types: 'woff,ttf',
                    codepoints: {
                        'angle-L_16': 0xF101,
                        'angle-M_16': 0xF102,
                        'angle-S_16': 0xF103,
                        'calendar_16': 0xF104,
                        'check_16': 0xF105,
                        'circle-8_16': 0xF106,
                        'clock_16': 0xF107,
                        'close-L_16': 0xF108,
                        'close-M_16': 0xF109,
                        'close-S_16': 0xF10A,
                        'ellipsis_16': 0xF10B,
                        'folder-closed_16': 0xF10C,
                        'folder-opened_16': 0xF10D,
                        'gear_16': 0xF10E,
                        'hamburger_16': 0xF10F,
                        'pause_16': 0xF110,
                        'play_16': 0xF111,
                        'stop_16': 0xF112,
                        'triangle_16': 0xF113,
                        'upload-to-cloud_24': 0xF114,
                        'upload-to-cloud_64': 0xF115,
                        'error_16': 0xF116,
                        'info_16': 0xF117,
                        'search_16': 0xF118,
                        'download_16': 0xF119,
                        'copy_16': 0xF11A
                    },
                    startCodepoint: 0xF201
                }
            }
        },
        shell: {
            publish: {command: 'npm publish'},
            svgrename: {
                command: 'cd build/icons && for f in *.svg; do mv "$f" "${f#mc-}"; done'
            }
        },
        rename: {
            main: {
                files: [
                    {src: [PATH_DIST_FONTS + '/' + 'mosaic.ttf'], dest: PATH_DIST_FONTS + '/' + 'mc-icons.ttf'},
                    {src: [PATH_DIST_FONTS + '/' + 'mosaic.woff'], dest: PATH_DIST_FONTS + '/' + 'mc-icons.woff'},
                    {src: [PATH_DIST_HTML + '/' + 'mosaic.html'], dest: PATH_DIST_HTML + '/' + 'mc-icons.html'},
                    {src: [PATH_DIST_STYLES + '/' + 'mosaic.less'], dest: PATH_DIST_STYLES + '/' + 'mc-icons.less'},
                    {src: [PATH_DIST_STYLES + '/' + '_Mosaic.scss'], dest: PATH_DIST_STYLES + '/' + '_mc-icons.scss'}
                ]
            }
        },
        replace: {
            remove_mask: {
                src: [PATH_BUILD_ICONS + '/*.svg'],
                overwrite: true,                 // overwrite matched source files
                replacements: [
                    {from: / fill="(.*?)"/m, to: ''},
                    {from: /(\s*)<\/defs[\s\S]*<\/g>/m, to: ''},
                    {from: /(\s*)<defs>/m, to: ''},
                    {from: / id="(.*?)"/m, to: ''},
                    {from: /xmlns:xlink="(.*?)"/m, to: ''},
                    {from: /(\s*)<g[\s\S]*?>/m, to: ''},
                    {from: /(\s*)<\/g>/m, to: ''},
                    {from: /<svg/m, to: '<svg fill="#000"'},
                    {from: / transform="(.*?)"/m, to: ''},
                    {from: / fill-rule="(.*?)"/m, to: ''},]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sketch');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-rename-util');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('publish', ['sketch_export:run', 'shell:svgrename', 'replace:remove_mask', 'webfont:run', 'rename:main', 'shell:publish']);
    grunt.registerTask('default', ['sketch_export:run', 'shell:svgrename', 'replace:remove_mask', 'webfont:run', 'rename:main',]);
};
