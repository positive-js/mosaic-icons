var FONT_VERSION = '4.0.0';

var ICONS = {
    "angle-down-L_16": {
        code: 0xF101,
        tags: ["angel down", "arrow", "down", "interface", "стрелка вниз", "стрелка", "вниз", "интерфейс"]
    },
    "angle-down-M_16": {
        code: 0xF102,
        tags: ["angel down", "arrow", "down", "interface", "стрелка вниз", "стрелка", "вниз", "интерфейс"]
    },
    "angle-down-S_16": {
        code: 0xF103,
        tags: ["angel down", "arrow", "down", "interface", "стрелка вниз", "стрелка", "вниз", "интерфейс"]
    },
    "calendar_16": {
        code: 0xF104,
        tags: ["business", "calendar", "date", "event", "plan", "schedule", "бизнесс", "календарь", "дата", "событие", "план", "рассписание"]
    },
    "check_16": {
        code: 0xF105,
        tags: ["check", "check box", "check mark", "done", "good", "interface", "ok", "selection", "success", "готово", "ок", "интерфейс", "успех", "выбор"]
    },
    "circle-8_16": {
        code: 0xF106,
        tags: ["circle", "round", "sphere", "basic", "orb", "ring", "круг", "кольцо", "сфера", "овал"]
    },
    "clock_16": {
        code: 0xF107,
        tags: ["business", "clock", "duration", "hour", "time", "watch", "бизнесс", "часы", "интервал", "час", "время"]
    },
    "close-L_16": {
        code: 0xF108,
        tags: ["cancel", "close", "cross", "delete", "interface", "x mark", "отменить", "закрыть", "крест", "удалить", "интерфейс"]
    },
    "close-M_16": {
        code: 0xF109,
        tags: ["cancel", "close", "cross", "delete", "interface", "x mark", "отменить", "закрыть", "крест", "удалить", "интерфейс"]
    },
    "close-S_16": {
        code: 0xF10A,
        tags: ["cancel", "close", "cross", "delete", "interface", "x mark", "отменить", "закрыть", "крест", "удалить", "интерфейс"]
    },
    "ellipsis_16": {
        code: 0xF10B,
        tags: ["interface", "menu", "navigation", "sidebar", "интерфейс", "меню", "сайдбар", "навигация"]
    },
    "folder-closed_16": {
        code: 0xF10C,
        tags: ["business", "case", "directory", "folder", "organize", "portfolio", "бизнесс", "папка", "портфолио", "директория"]
    },
    "folder-opened_16": {
        code: 0xF10D,
        tags: ["business", "case", "directory", "folder", "organize", "portfolio", "бизнесс", "папка", "портфолио", "директория"]
    },
    "gear_16": {
        code: 0xF10E,
        tags: ["advanced", "configuration", "gear", "interface", "option", "preferences", "settings", "tool", "интерфейс", "дополнительно", "шестеренка", "настройки", "инструмент"]
    },
    "hamburger_16": {
        code: 0xF10F,
        tags: ["hamburger", "interface", "list", "menu", "navigation", "sidebar", "интерфейс", "гамбургер", "список", "меню", "навигация", "сайдбар"]
    },
    "pause_16": {
        code: 0xF110,
        tags: ["audio", "control", "interface", "media control", "multimedia", "music", "pause", "sound", "интерфейс", "аудио", "контрол", "медиа", "музыка", "пауза", "звук"]
    },
    "play_16": {
        code: 0xF111,
        tags: ["audio", "control", "interface", "media control", "multimedia", "music", "play", "sound", "интерфейс", "аудио", "контрол", "медиа", "музыка", "пуск", "звук"]
    },
    "stop_16": {
        code: 0xF112,
        tags: ["audio", "control", "interface", "media control", "multimedia", "music", "stop", "sound", "интерфейс", "аудио", "контрол", "медиа", "музыка", "стоп", "звук"]
    },
    "triangle-down_16": {
        code: 0xF113,
        tags: ["arrow", "care down", "down", "interface", "интерфейс", "стрелка", "вниз"]
    },
    "upload-to-cloud_24": {
        code: 0xF114,
        tags: ["beam", "output", "transfer", "up", "upload", "web", "вывод", "вверх", "веб", "загрузка", "облако"]
    },
    "upload-to-cloud_64": {
        code: 0xF115,
        tags: ["beam", "output", "transfer", "up", "upload", "web", "вывод", "вверх", "веб", "загрузка", "облако"]
    },
    "error_16": {
        code: 0xF116,
        tags: ["alert", "error", "failure", "fault", "notice", "signs", "ошибка", "знак", "проблема"]
    },
    "info_16": {
        code: 0xF117,
        tags: ["info", "information", "instruction", "note", "notice", "notification", "signs", "tip", "информация", "инфо", "инструкция", "заметка", "уведомление", "знак", "подсказка"]
    },
    "search_16": {
        code: 0xF118,
        tags: ["find", "interface", "loupe", "magnifier", "search", "интерфейс", "поиск", "искать"]
    },
    "download_16": {
        code: 0xF119,
        tags: ["download", "keep", "load", "save", "transfer", "web", "скачать", "загрузить", "сохранить", "веб"]
    },
    "copy-o_16": {
        code: 0xF11A,
        tags: ["clone", "copy", "double", "duplicate", "interface", "reproduction", "копировать", "дубль", "интерфейс", "клон"]
    },
    "minus_16": {
        code: 0xF11B,
        tags: ["cross", "decrease", "less", "minus", "negative", "remove", "крест", "минус", "меньше", "умеьшить"]
    },
    "angle-up-L_16": {
        code: 0xF11C,
        tags: ["angel up", "arrow", "chevron", "interface", "up", "стрелка вверх", "стрелка", "вверх", "интерфейс"]
    },
    "angle-up-M_16": {
        code: 0xF11D,
        tags: ["angel up", "arrow", "chevron", "interface", "up", "стрелка вверх", "стрелка", "вверх", "интерфейс"]
    },
    "angle-up-S_16": {
        code: 0xF11E,
        tags: ["angel up", "arrow", "chevron", "interface", "up", "стрелка вверх", "стрелка", "вверх", "интерфейс"]
    },
    "angle-left-L_16": {
        code: 0xF11F,
        tags: ["angel left", "arrow", "back", "backward", "chevron", "interface", "стрелка влево", "стрелка", "назад", "влево", "интерфейс"]
    },
    "angle-left-M_16": {
        code: 0xF120,
        tags: ["angel left", "arrow", "back", "backward", "chevron", "interface", "стрелка влево", "стрелка", "назад", "влево", "интерфейс"]
    },
    "angle-left-S_16": {
        code: 0xF121,
        tags: ["angel left", "arrow", "back", "backward", "chevron", "interface", "стрелка влево", "стрелка", "назад", "влево", "интерфейс"]
    },
    "angle-right-L_16": {
        code: 0xF122,
        tags: ["angel right", "arrow", "chevron", "continue", "forward", "interface", "next", "стрелка вправо", "стрелка", "вправо", "продолжить", "вперед", "интерфейс", "следующий"]
    },
    "angle-right-M_16": {
        code: 0xF123,
        tags: ["angel right", "arrow", "chevron", "continue", "forward", "interface", "next", "стрелка вправо", "стрелка", "вправо", "продолжить", "вперед", "интерфейс", "следующий"]
    },
    "angle-right-S_16": {
        code: 0xF124,
        tags: ["angel right", "arrow", "chevron", "continue", "forward", "interface", "next", "стрелка вправо", "стрелка", "вправо", "продолжить", "вперед", "интерфейс", "следующий"]
    },
    "bell_32": {
        code: 0xF125,
        tags: ["alarm", "bell", "business", "buzz", "chime", "dong", "gong", "колокольчик", "будильник", "звонок", "уведомление"]
    },
    "hamburger_32": {
        code: 0xF126,
        tags: ["hamburger", "interface", "list", "menu", "navigation", "sidebar", "интерфейс", "гамбургер", "список", "меню", "навигация", "сайдбар"]
    },
    "close-L_32": {
        code: 0xF127,
        tags: ["cancel", "close", "cross", "delete", "interface", "x mark", "отменить", "закрыть", "крест", "удалить", "интерфейс"]
    },
    "angle-right-M_32": {
        code: 0xF128,
        tags: ["angel right", "arrow", "chevron", "continue", "forward", "interface", "next", "стрелка вправо", "стрелка", "вправо", "продолжить", "вперед", "интерфейс", "следующий"]
    },
    "triangle-up_16": {
        code: 0xF129,
        tags: ["arrow", "basic", "cone", "geometry", "triangle", "up", "стрелка", "конус", "треугольник", "геометрия", "вверх"]
    },
    "bell-o_16": {
        code: 0xF12A,
        tags: ["alarm", "bell", "business", "buzz", "chime", "dong", "gong", "колокольчик", "будильник", "звонок", "уведомление"]
    },
    "bell-off-o_16": {
        code: 0xF12B,
        tags: ["alarm", "bell", "business", "buzz", "chime", "dong", "gong", "колокольчик", "будильник", "звонок", "уведомление"]
    },
    "download_32": {
        code: 0xF12C,
        tags: ["download", "keep", "load", "save", "transfer", "web", "", "", "", ""]
    },
    "triangle-left_16": {
        code: 0xF12D,
        tags: ["arrow", "back", "backward", "care left", "interface", "стрелка", "влево", "назад", "интерфейс"]
    },
    "triangle-right_16": {
        code: 0xF12E,
        tags: ["arrow", "continue", "direction", "forward", "interface", "more", "next", "стрелка", "вправо", "продолжить", "направление", "вперед", "интерфейс", "больше", "следующий"]
    },
    "upload-to-cloud_16": {
        code: 0xF12F,
        tags: ["beam", "output", "transfer", "up", "upload", "web", "вывод", "вверх", "веб", "загрузка", "облако"]
    },
    "upload-to-cloud_32": {
        code: 0xF130,
        tags: ["beam", "output", "transfer", "up", "upload", "web", "вывод", "вверх", "веб", "загрузка", "облако"]
    },
    "bell_16": {
        code: 0xF131,
        tags: ["alarm", "bell", "business", "buzz", "chime", "dong", "gong", "колокольчик", "будильник", "звонок", "уведомление"]
    },
    "copy_16": {
        code: 0xF132,
        tags: ["clone", "copy", "double", "duplicate", "interface", "reproduction", "копировать", "дубль", "интерфейс", "клон"]
    },
    "folder-search_16": {
        code: 0xF133,
        tags: ["business", "case", "directory", "find", "folder", "organize", "search", "папка", "поиск", "искать", "директория"]
    },
    "folder-search-opened_16": {
        code: 0xF134,
        tags: ["business", "case", "directory", "find", "folder", "organize", "search", "папка", "поиск", "искать", "директория"]
    }
};

var CODEPOINTS = {};

Object.entries(ICONS).forEach(([key, value]) => {
    CODEPOINTS[key] = value.code;
});

const PATH_BUILD_ICONS  = './build/icons',
      PATH_DIST_INFO    = './dist/info/mc-icons-info.json',
      PATH_DIST_FONTS   = './dist/fonts',
      PATH_DIST_STYLES  = './dist/styles',
      PATH_DIST_SVG     = './dist/svg',
      PATH_DIST_HTML    = './dist/html';

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
        json_generator: {
            your_target: {
                dest: PATH_DIST_INFO,
                options: ICONS
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
            svgfromsubfolder: {
                command: 'find ' + PATH_BUILD_ICONS + ' -mindepth 2 -type f -print -exec mv {} ' + PATH_BUILD_ICONS + '/ \\;'
            },
            svgrename: {
                command: 'cd ' + PATH_BUILD_ICONS + ' && for f in *.svg; do mv "$f" "${f#mc-}"; done'
            },
            svgcopytobuild: {
                command: 'mkdir -p ' + PATH_DIST_SVG + '; cd ' + PATH_BUILD_ICONS + ' && for f in *.svg; do cp "$f" "../../dist/svg/$f"; done'
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
    grunt.loadNpmTasks('grunt-json-generator');

    grunt.registerTask('publish', ['sketch_export:run', 'shell:svgfromsubfolder', 'replace:remove_mask', 'shell:svgcopytobuild', 'shell:svgrename', 'webfont:run', 'rename:main', 'embedFonts', 'json_generator', 'shell:publish']);
    grunt.registerTask('default', ['sketch_export:run', 'shell:svgfromsubfolder', 'replace:remove_mask', 'shell:svgcopytobuild', 'shell:svgrename', 'webfont:run', 'rename:main', 'embedFonts', 'json_generator']);
};
