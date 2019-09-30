var FONT_VERSION = '1.9.5';

var CODEPOINTS = {
    'angle-down-L_16'           : 0xF101,
    'angle-down-M_16'           : 0xF102,
    'angle-down-S_16'           : 0xF103,
    'calendar_16'               : 0xF104,
    'check_16'                  : 0xF105,
    'circle-8_16'               : 0xF106,
    'clock_16'                  : 0xF107,
    'close-L_16'                : 0xF108,
    'close-M_16'                : 0xF109,
    'close-S_16'                : 0xF10A,
    'ellipsis_16'               : 0xF10B,
    'folder-closed_16'          : 0xF10C,
    'folder-opened_16'          : 0xF10D,
    'gear_16'                   : 0xF10E,
    'hamburger_16'              : 0xF10F,
    'pause_16'                  : 0xF110,
    'play_16'                   : 0xF111,
    'stop_16'                   : 0xF112,
    'triangle-down_16'          : 0xF113,
    'upload-to-cloud_24'        : 0xF114,
    'upload-to-cloud_64'        : 0xF115,
    'error_16'                  : 0xF116,
    'info_16'                   : 0xF117,
    'search_16'                 : 0xF118,
    'download_16'               : 0xF119,
    'copy_16'                   : 0xF11A,
    'minus_16'                  : 0xF11B,
    'angle-up-L_16'             : 0xF11C,
    'angle-up-M_16'             : 0xF11D,
    'angle-up-S_16'             : 0xF11E,
    'angle-left-L_16'           : 0xF11F,
    'angle-left-M_16'           : 0xF120,
    'angle-left-S_16'           : 0xF121,
    'angle-right-L_16'          : 0xF122,
    'angle-right-M_16'          : 0xF123,
    'angle-right-S_16'          : 0xF124,
    'bell_32'                   : 0xF125,
    'hamburger_32'              : 0xF126,
    'close-L_32'                : 0xF127,
    'angle-right-M_32'          : 0xF128,
    'triangle-up_16'            : 0xF129,
    'bell_16'                   : 0xF12A,
    'bell-off_16'               : 0xF12B,
    'download_32'               : 0xF12C,
    'triangle-left_16'          : 0xF12D,
    'triangle-right_16'         : 0xF12E,
    'upload-to-cloud_16'        : 0xF12F,
    'upload-to-cloud_32'        : 0xF130,
};

const PATH_BUILD_ICONS = './build/icons',
    PATH_DIST_FONTS = './dist/fonts',
    PATH_DIST_STYLES = './dist/styles',
    PATH_DIST_HTML = './dist/html';

const SKETCH_FILE_DEF = 'mosaic-icons-iconset.sketch';


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
        embedFonts: {
            all: {
                files: {
                    'dist/styles/mc-icons-embed.css': ['dist/styles/mc-icons.css']
                }
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
                    stylesheets: ['less', 'scss', 'css'],
                    htmlDemo: true,
                    destHtml: PATH_DIST_HTML,
                    template: 'template.css',
                    fontFamilyName: 'PT Mosaic Icons',
                    font: 'Mosaic',
                    version: FONT_VERSION,
                    types: 'woff,ttf',
                    /*
                    Для тестовой генерации шрифта под Windows нужно раскомментировать эти строки.
                    Шрифт в этом случае генерируется криво, не используйте это для публикации пакета!!!
                    */
                    // engine: 'node',
                    // autoHint: false,
                    codepoints: CODEPOINTS,
                    startCodepoint: 0xF701
                }
            }
        },
        shell: {
            publish: {command: 'npm publish'},
            svgfromsubfolder : {
                command: 'find ' + PATH_BUILD_ICONS + ' -mindepth 2 -type f -print -exec mv {} ' + PATH_BUILD_ICONS + '/ \\;'  
              },
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
                    {src: [PATH_DIST_STYLES + '/' + '_Mosaic.scss'], dest: PATH_DIST_STYLES + '/' + '_mc-icons.scss'},
                    {src: [PATH_DIST_STYLES + '/' + 'Mosaic.css'], dest: PATH_DIST_STYLES + '/' + 'mc-icons.css'}
                ]
            }
        },
        replace: {
            remove_mask: {
                src: [PATH_BUILD_ICONS + '/*.svg'],
                overwrite: true,                 // overwrite matched source files
                replacements: [
                    {from : /<!--(.*?)-->\n/m,             to : ''},
                    {from : / fill="(.*?)"/m,             to : ''},
                    {from : /(\s*)<\/defs[\s\S]*<\/g>/m,  to : ''},
                    {from : /(\s*)<defs>/m,               to : ''},
                    {from : / id="(.*?)"/m,               to : ''},
                    {from : /xmlns:xlink="(.*?)"/m,       to : ''},
                    {from : /(\s*)<g[\s\S]*?>/m,          to : ''},
                    {from : /(\s*)<\/g>/m,                to : ''},
                    {from : /<svg/m,                      to : '<svg fill="#000"'},
                    {from : / transform="(.*?)"/m,        to : ''},
                    {from : / fill-rule="(.*?)"/m,        to : ''},
                    {from : /<desc>(.*?)<\/desc>\n/m,     to : ''},
                    {from : /<title>(.*?)<\/title>\n/m,   to : ''},
                 ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sketch');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-embed-fonts');
    grunt.loadNpmTasks('grunt-rename-util');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('publish', ['sketch_export:run', 'shell:svgfromsubfolder', 'shell:svgrename', 'replace:remove_mask', 'webfont:run', 'rename:main', 'embedFonts', 'shell:publish']);
    grunt.registerTask('default', ['sketch_export:run', 'shell:svgfromsubfolder', 'shell:svgrename', 'replace:remove_mask', 'webfont:run', 'rename:main', 'embedFonts']);
};
