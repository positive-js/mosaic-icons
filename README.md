[![npm version](https://badge.fury.io/js/%40ptsecurity%2Fmosaic-icons.svg)](https://badge.fury.io/js/%40ptsecurity%2Fmosaic-icons)
[![Build Status](https://travis-ci.org/positive-js/mosaic-icons.svg?branch=master)](https://travis-ci.org/positive-js/mosaic-icons)
[![Dependency Status](https://david-dm.org/positive-js/mosaic.svg)](https://david-dm.org/positive-js/mosaic-icons)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/positive-js/mosaic-icons/blob/master/LICENSE)

# Mosaic Icons

## Installation in frontend code
Note that Mosaic Icons is optional package and it should be installed manually.

### NPM
`npm install @ptsecurity/mosaic-icons --save`

### Yarn
`yarn add @ptsecurity/mosaic-icons`

Then you should add icons styles:

`@import "~@ptsecurity/mosaic-icons/dist/styles/mc-icons.css";`

And finally import McIconModule to your component module.

    import { McIconModule } from '@ptsecurity/mosaic';

    @NgModule({
        imports: [
            McIconModule,
            ...
        ],
    })
    export class AppModule {}
    
If mc-icons.css does't suit your project, you can also add:

- mc-icons.less;
- mc-icons-embed.css with embedded font included.

## Variants

There are two icon usage variants:

1. `<i mc-icon="mc-gear_16"></i>`;

    In this case you can provide `[color]` attribute. It can have following values: *primary*, *second*, *error*.

2. Simply `<i class="mc mc-gear_16"></i>`.


## Icons pack version building and publishing (macOS)
### Install some required software
1. Install brew ([http://brew.sh/index_ru.html](http://brew.sh/index_ru.html)):
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`

2. Install font tools with brew:
`brew install ttfautohint fontforge --with-python`. If fails try this one: `brew install ttfautohint fontforge`

3. Install node.js. Download stable LTS version from here: [https://nodejs.org/en/](https://nodejs.org/en/).

4. Install grunt
`sudo npm install -g grunt-cli`
You'll be asked for the password, it's your local macOS password.

1. Copy *icons-config.json.template* to *icons-config.json* and add token to file (do not commit it).

### Building
Run commands:
`npm install`
`grunt`

### Publish version to npm repository
1. Open figma file [figma.com/file/oQC47kSeukdqLMNh4IUhke/Mosaic-icons](https://www.figma.com/file/oQC47kSeukdqLMNh4IUhke/Mosaic-icons), craft icon. Make icon ready for iconpack: flatten, outline, name by convention.
2. Build pack: `grunt`.
3. Add new icon names to *Gruntfile.js* into codepoints section. Add synonyms to *tags*. **Attention:** all codes are hex: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 10.
4. Check icons rendering in html preview. New icons must be correct both in webfont and svg sprite previews. Check glyph code with opentype.js (https://opentype.js.org/glyph-inspector.html). Correct: No symbols with codes F7хх.
5. Commint svg icons and Gruntfile.js. Commit message: *What changes were made*.
6. Add changes to *CHANGELOG.md*.
7. Change version in *package.json*.
8. Change version in *Gruntfile.js*.
9. Commit *package.json*, *Gruntfile.js* and *CHANGELOG.md*. Commit message: *Bumped version number to %version%*.
10. Add tag with *%version%* and push it. It will trigger build and publish to global npm.

You are free to drink a cup of coffee.