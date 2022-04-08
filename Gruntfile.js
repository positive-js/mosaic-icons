var FONT_VERSION = '6.2.0';

var ICONS = {
    "angle-down-L_16": {
        code: 0xF101,
        tags: ["expand", "стрелка вниз", "уголок", "развернуть"]
    },
    "angle-down-M_16": {
        code: 0xF102,
        tags: ["expand", "стрелка вниз", "уголок", "развернуть"]
    },
    "angle-down-S_16": {
        code: 0xF103,
        tags: ["expand", "стрелка вниз", "уголок", "развернуть"]
    },
    "calendar_16": {
        code: 0xF104,
        tags: ["date", "datepicker", "schedule", "календарь", "дейтпикер", "расписание", "дата"]
    },
    "check_16": {
        code: 0xF105,
        tags: ["check", "done", "success", "готово", "галочка", "успех", "ок", "ок"]
    },
    "circle-8_16": {
        code: 0xF106,
        tags: ["circle", "round", "круг"]
    },
    "clock_16": {
        code: 0xF107,
        tags: ["duration", "hour", "time", "watch", "часы", "время", "таймпикер"]
    },
    "close-L_16": {
        code: 0xF108,
        tags: ["cancel", "close", "cross", "times", "x mark", "отменить", "отмена", "закрыть", "крестик", "удалить"]
    },
    "close-M_16": {
        code: 0xF109,
        tags: ["cancel", "close", "cross", "times", "x mark", "отменить", "отмена", "закрыть", "крестик", "удалить"]
    },
    "close-S_16": {
        code: 0xF10A,
        tags: ["cancel", "close", "cross", "times", "x mark", "отменить", "отмена", "закрыть", "крестик", "удалить"]
    },
    "ellipsis_16": {
        code: 0xF10B,
        tags: ["menu", "меню", "многоточие"]
    },
    "folder-closed_16": {
        code: 0xF10C,
        tags: ["directory", "папка", "директория"]
    },
    "folder-opened_16": {
        code: 0xF10D,
        tags: ["directory", "папка", "директория"]
    },
    "gear_16": {
        code: 0xF10E,
        tags: ["configuration", "interface", "options", "preferences", "settings", "tool", "шестеренка", "шестерёнка", "настройка", "параметры"]
    },
    "hamburger_16": {
        code: 0xF10F,
        tags: ["hamburger", "menu", "гамбургер", "меню"]
    },
    "pause_16": {
        code: 0xF110,
        tags: ["пауза"]
    },
    "play_16": {
        code: 0xF111,
        tags: ["start", "пуск", "запустить", "запуск"]
    },
    "stop_16": {
        code: 0xF112,
        tags: ["стоп", "остановить", "остановка"]
    },
    "triangle-down_16": {
        code: 0xF113,
        tags: ["caret down", "expand", "стрелка вниз", "уголок", "развернуть"]
    },
    "upload-to-cloud_24": {
        code: 0xF114,
        tags: ["загрузка", "загрузить", "облако"]
    },
    "upload-to-cloud_64": {
        code: 0xF115,
        tags: ["загрузка", "загрузить", "облако"]
    },
    "error_16": {
        code: 0xF116,
        tags: ["failure", "ошибка", "проблема"]
    },
    "info_16": {
        code: 0xF117,
        tags: ["note", "notice", "tip", "информация", "инфо", "подсказка"]
    },
    "search_16": {
        code: 0xF118,
        tags: ["search", "find", "magnifier", "лупа", "поиск", "искать"]
    },
    "download_16": {
        code: 0xF119,
        tags: ["скачать", "загрузить", "сохранить"]
    },
    "copy-o_16": {
        code: 0xF11A,
        tags: ["clone", "duplicate", "дубль", "дублировать", "копировать", "копия"]
    },
    "minus_16": {
        code: 0xF11B,
        tags: ["decrease", "минус", "меньше", "уменьшить"]
    },
    "angle-up-L_16": {
        code: 0xF11C,
        tags: ["стрелка вверх", "expand", "уголок", "развернуть"]
    },
    "angle-up-M_16": {
        code: 0xF11D,
        tags: ["стрелка вверх", "expand", "уголок", "развернуть"]
    },
    "angle-up-S_16": {
        code: 0xF11E,
        tags: ["стрелка вверх", "expand", "уголок", "развернуть"]
    },
    "angle-left-L_16": {
        code: 0xF11F,
        tags: ["стрелка влево", "expand", "уголок", "развернуть"]
    },
    "angle-left-M_16": {
        code: 0xF120,
        tags: ["стрелка влево", "expand", "уголок", "развернуть"]
    },
    "angle-left-S_16": {
        code: 0xF121,
        tags: ["стрелка влево", "expand", "уголок", "развернуть"]
    },
    "angle-right-L_16": {
        code: 0xF122,
        tags: ["стрелка вправо", "expand", "уголок", "развернуть"]
    },
    "angle-right-M_16": {
        code: 0xF123,
        tags: ["стрелка вправо", "expand", "уголок", "развернуть"]
    },
    "angle-right-S_16": {
        code: 0xF124,
        tags: ["стрелка вправо", "expand", "уголок", "развернуть"]
    },
    "bell_32": {
        code: 0xF125,
        tags: ["alarm", "notification", "будильник", "колокольчик", "уведомление"]
    },
    "hamburger_32": {
        code: 0xF126,
        tags: ["hamburger", "menu", "гамбургер", "меню"]
    },
    "close-L_32": {
        code: 0xF127,
        tags: ["cancel", "close", "cross", "times", "x mark", "отменить", "отмена", "закрыть", "крестик", "удалить"]
    },
    "angle-right-M_32": {
        code: 0xF128,
        tags: ["стрелка вправо", "expand", "уголок", "развернуть"]
    },
    "triangle-up_16": {
        code: 0xF129,
        tags: ["caret up", "expand", "стрелка вверх", "уголок", "развернуть"]
    },
    "bell-o_16": {
        code: 0xF12A,
        tags: ["alarm", "notification", "будильник", "колокольчик", "уведомление"]
    },
    "bell-off-o_16": {
        code: 0xF12B,
        tags: ["alarm", "notification", "будильник", "колокольчик", "уведомление"]
    },
    "download_32": {
        code: 0xF12C,
        tags: ["скачать", "загрузить", "сохранить"]
    },
    "triangle-left_16": {
        code: 0xF12D,
        tags: ["caret left", "expand", "стрелка влево", "уголок", "развернуть"]
    },
    "triangle-right_16": {
        code: 0xF12E,
        tags: ["caret left", "expand", "стрелка влево", "уголок", "развернуть"]
    },
    "upload-to-cloud_16": {
        code: 0xF12F,
        tags: ["загрузка", "загрузить", "облако"]
    },
    "upload-to-cloud_32": {
        code: 0xF130,
        tags: ["загрузка", "загрузить", "облако"]
    },
    "bell_16": {
        code: 0xF131,
        tags: ["alarm", "notification", "будильник", "колокольчик", "уведомление"]
    },
    "copy_16": {
        code: 0xF132,
        tags: ["clone", "duplicate", "дубль", "дублировать", "копировать", "копия"]
    },
    "folder-search_16": {
        code: 0xF133,
        tags: ["directory", "папка", "директория", "динамическая группа"]
    },
    "folder-search-opened_16": {
        code: 0xF134,
        tags: ["directory", "папка", "директория", "динамическая группа"]
    },
    "info-o_16": {
        code: 0xF135,
        tags: ["note", "notice", "tip", "информация", "инфо", "подсказка"]
    },
    "close-circle_16": {
        code: 0xF136,
        tags: ["reset", "discard", "close", "cross", "times", "x mark", "отменить", "отмена", "закрыть", "крестик", "удалить", "сбросить"]
    },
    "bento_16": {
        code: 0xF137,
        tags: ["hamburger", "bento", "menu", "гамбургер", "бенто", "меню"]
    },
    "bento_32": {
        code: 0xF138,
        tags: ["hamburger", "bento", "menu", "гамбургер", "бенто", "меню"]
    },
    "new-tab_16": {
        code: 0xF139,
        tags: ["new tab", "новая вкладка"]
    },
    "external-link_16": {
        code: 0xF13A,
        tags: ["external link", "new tab", "новая вкладка", "внешняя ссылка"]
    },
    "bento_24" : {
        code: 0xF13B,
        tags: ["hamburger", "bento", "menu", "гамбургер", "бенто", "меню"]
    },
    "angle-down-L_24": {
        code: 0xF13C,
        tags: ["expand", "collapse", "стрелка вниз", "уголок", "свернуть", "развернуть"]
    },
    "angle-down-M_24": {
        code: 0xF13D,
        tags: ["expand", "collapse", "стрелка вниз", "уголок", "свернуть", "развернуть"]
    },
    "angle-left-L_24": {
        code: 0xF13E,
        tags: ["expand", "collapse", "стрелка влево", "уголок", "свернуть", "развернуть"]
    },
    "angle-left-M_24": {
        code: 0xF13F,
        tags: ["expand", "collapse", "стрелка влево", "уголок", "свернуть", "развернуть"]
    },
    "angle-right-L_24": {
        code: 0xF140,
        tags: ["expand", "collapse", "стрелка вправо", "уголок", "свернуть", "развернуть"]
    },
    "angle-right-M_24": {
        code: 0xF141,
        tags: ["expand", "collapse", "стрелка вправо", "уголок", "свернуть", "развернуть"]
    },
    "angle-up-L_24": {
        code: 0xF142,
        tags: ["expand", "collapse", "стрелка вверх", "уголок", "свернуть", "развернуть"]
    },
    "angle-up-M_24": {
        code: 0xF143,
        tags: ["expand", "collapse", "стрелка вверх", "уголок", "свернуть", "развернуть"]
    },
    "bell-o_24": {
        code: 0xF144,
        tags: ["alarm", "notification", "будильник", "колокольчик", "уведомление"]
    },
    "chart-bar_24": {
        code: 0xF145,
        tags: ["chart", "dashboard", "дашборд", "график", "диаграмма"]
    },
    "ellipsis_24": {
        code: 0xF146,
        tags: ["menu", "меню", "многоточие"]
    },
    "folder-open-o_24": {
        code: 0xF147,
        tags: ["directory", "папка", "директория"]
    },
    "list_24": {
        code: 0xF148,
        tags: ["list", "список"]
    },
    "question-circle_24": {
        code: 0xF149,
        tags: ["help", "question", "hint", "справка", "подсказка", "вопрос"]
    },
    "search_24": {
        code: 0xF150,
        tags: ["search", "find", "magnifier", "лупа", "поиск", "искать"]
    },
    "user-o_24": {
        code: 0xF151,
        tags: ["user", "human", "person", "account", "profile", "пользователь", "человек", "учетная запись", "профиль"]
    },
    "user_16": {
        code: 0xF152,
        tags: ["user", "human", "person", "account", "profile", "пользователь", "человек", "учетная запись", "профиль"]
    },
    "eye_16": {
        code: 0xF153,
        tags: ["eye", "password", "глаз", "пароль"]
    },
    "eye-crossed_16": {
        code: 0xF154,
        tags: ["eye", "password", "глаз", "пароль"]
    },
    "color-palette_16": {
        code: 0xF155,
        tags: ["color", "palette", "цвет", "палитра"]
    },
    "globe_16": {
        code: 0xF156,
        tags: ["globe", "internet", "language", "website", "глобус", "интернет", "язык", "сайт"]
    },
    "theme_16": {
        code: 0xF157,
        tags: ["dark mode", "light mode", "темный режим", "светлый режим"]
    }
};

var CODEPOINTS = {};

Object.entries(ICONS).forEach(([key, value]) => {
    CODEPOINTS[key] = value.code;
});

const PATH_BUILD_ICONS = './build/icons',
      PATH_DIST_INFO   = './dist/info/mc-icons-info.json',
      PATH_DIST_FONTS  = './dist/fonts',
      PATH_DIST_STYLES = './dist/styles',
      PATH_DIST_SVG    = './dist/svg',
      PATH_DIST_HTML   = './dist/html';

module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-svg-sprite');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.initConfig({
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
                    template: 'templates/template.css',
                    htmlDemoTemplate: 'templates/template.html',
                    htmlDemoFilename: 'template',
                    destHtml: 'dist',
                    fontFamilyName: 'PT Mosaic Icons',
                    font: 'Mosaic',
                    version: FONT_VERSION,
                    types: 'woff,ttf',
                    codepoints: CODEPOINTS,
                    startCodepoint: 0xF701,
                }
            }
        },
        shell: {
            publish: { command: 'npm publish' },
            svgfromsubfolder: {
                command: 'find ' + PATH_BUILD_ICONS + ' -mindepth 2 -type f -print -exec mv {} ' + PATH_BUILD_ICONS + '/ \\;'
            },
            svgrename: {
                command: 'cd ' + PATH_BUILD_ICONS + ' && for f in *.svg; do mv "$f" "${f#mc-}"; done'
            },
            figmaexport: {
                command: 'npm run export-icons'
            },
            cleanup: {
                command: 'rm -rf ./{dist,build}'
            },
            remove_template: {
                command: 'rm dist/template.html'
            },
            svgcopytobuild: {
                command: 'mkdir -p ' + PATH_DIST_SVG + '; cd ' + PATH_BUILD_ICONS + ' && for f in *.svg; do cp "$f" "../../dist/svg/$f"; done'
            },
            copyFigmaConfig: {
                command: 'cp icons-config.json.template icons-config.json'
            }
        },
        rename: {
            main: {
                files: [
                    { src: [PATH_DIST_FONTS + '/' + 'Mosaic.ttf'], dest: PATH_DIST_FONTS + '/' + 'mc-icons.ttf' },
                    { src: [PATH_DIST_FONTS + '/' + 'Mosaic.woff'], dest: PATH_DIST_FONTS + '/' + 'mc-icons.woff' },
                    { src: [PATH_DIST_HTML + '/' + 'Mosaic.html'], dest: PATH_DIST_HTML + '/' + 'mc-icons.html' },
                    { src: [PATH_DIST_STYLES + '/' + 'Mosaic.less'], dest: PATH_DIST_STYLES + '/' + 'mc-icons.less' },
                    { src: [PATH_DIST_STYLES + '/' + '_Mosaic.scss'], dest: PATH_DIST_STYLES + '/' + '_mc-icons.scss' },
                    { src: [PATH_DIST_STYLES + '/' + 'Mosaic.css'], dest: PATH_DIST_STYLES + '/' + 'mc-icons.css' }
                ]
            }
        },
        replace: {
            remove_mask: {
                src: [PATH_BUILD_ICONS + '/*.svg'],
                overwrite: true,                 // overwrite matched source files
                replacements: [
                // { from: /<!--(.*?)-->\n/m, to: '' },
                // { from: /fill="#ABCDEF"/m, to: 'class="primary-color"' },
                { from: /fill="#EE30FF"/m, to: 'fill="currentColor"' },
                { from: / fill="(#(.*?)|none)"/gm, to: '' },
                { from: / stroke="(.*?)"/gm, to: '' },
                // { from: /(\s*)<\/defs[\s\S]*<\/g>/m, to: '' },
                // { from: /(\s*)<defs>/m, to: '' },
                // { from: / id="(.*?)"/m, to: '' },
                // { from: /xmlns:xlink="(.*?)"/m, to: '' },
                // { from: /(\s*)<g[\s\S]*?>/m, to: '' },
                // { from: /(\s*)<\/g>/m, to: '' },
                // { from: /<svg/m, to: '<svg fill="#000"' },
                { from: / transform="(.*?)"/m, to: '' },
                // { from: /<desc>(.*?)<\/desc>\n/m, to: '' },
                // { from: /<title>(.*?)<\/title>\n/m, to: '' },
                ]
            },
            figmaPersonalToken: {
                src: ['icons-config.json'],
                overwrite: true,
                replacements: [
                    { from: "{FIGMA_TOKEN_PLACEHOLDER}", to: grunt.option('FIGMA_TOKEN') || undefined }
                ]
            }

        },
        svg_sprite: {
            basic: {
                expand: true,
                cwd: 'build/icons',
                src: ['*.svg'],
                dest: 'dist',
                options: {
                "svg": {
                    "xmlDeclaration": false,
                    "doctypeDeclaration": false,
                    "namespaceIDs": false,
                    "dimensionAttributes": false
                },
                "mode": {
                    "symbol": {
                    "prefix": ".pt-%s",
                    "inline": true,
                    "example": {
                        "template": "dist/template.html",
                        "dest": "../index.html"
                    },
                    render: {
                        scss: true
                    },
                    }
                }
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-embed-fonts');
    grunt.loadNpmTasks('grunt-rename-util');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-json-generator');

    const commonTasks = [
        'shell:figmaexport',
        'shell:svgfromsubfolder',
        'replace:remove_mask',
        'shell:svgcopytobuild',
        'shell:svgrename',
        'webfont:run',
        'svg_sprite:basic',
        'rename:main',
        'shell:remove_template',
        'embedFonts',
        'json_generator'
    ];

    grunt.registerTask('publish',
        [
            'shell:cleanup',
            'shell:copyFigmaConfig',
            'replace:figmaPersonalToken',
            ...commonTasks,
            'shell:publish'
        ]
    );

    grunt.registerTask('build:ci', [
        'shell:cleanup',
        'shell:copyFigmaConfig',
        'replace:figmaPersonalToken',
        ...commonTasks
    ]);

    grunt.registerTask('default', [
        'shell:cleanup',
        ...commonTasks
    ]);
};
