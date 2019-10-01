[![npm version](https://badge.fury.io/js/%40ptsecurity%2Fmosaic-icons.svg)](https://badge.fury.io/js/%40ptsecurity%2Fmosaic-icons)
[![Build Status](https://travis-ci.org/positive-js/mosaic-icons.svg?branch=master)](https://travis-ci.org/positive-js/mosaic-icons)
[![Dependency Status](https://david-dm.org/positive-js/mosaic.svg)](https://david-dm.org/positive-js/mosaic-icons)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/positive-js/mosaic-icons/blob/master/LICENSE)

# Mosaic Icons

###Installation
Note that Mosaic Icons is optional package and it should be installed manually.

#####NPM
`npm install @ptsecurity/mosaic-icons --save`
#####Yarn
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

###Variants

There are two icon usage variants:

1. `<i mc-icon="mc-gear_16"></i>`;

    In this case you can provide `[color]` attribute. It can have following values: *primary*, *second*, *error*.

2. Simply `<i class="mc mc-gear_16"></i>`.
