import { parallel, series, src, dest } from 'gulp';
import * as path from 'path';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';

const source: string[] = ['build/icons/*.svg'];


const targetDir = path.resolve(__dirname, 'dist/');
const fontCssConfig = {
    fontName: 'mc',
    path: path.resolve(__dirname, './template/index.css'),
    targetPath: 'dist/index.css',
    fontPath: './',
};

const runTimestamp = Math.round(Date.now() / 1000);
const svgMap: any = {};
interface GLYPHS {
    name: string;
    unicode: string;
}
const generateIconFont = ({
                              iconGlob,
                              targetDir,
                              fontCssConfig,
                          }: {
    iconGlob: string;
    targetDir: string;
    fontCssConfig: Object;
}) =>
    function generate() {
        return src([iconGlob])
            .pipe(iconfontCss(fontCssConfig))
            .pipe(
                iconfont({
                    fontName: 'mc',
                    prependUnicode: true,
                    // 'woff2' and 'svg' are available
                    formats: ['svg', 'ttf', 'eot', 'woff'],
                    timestamp: runTimestamp,
                    normalize: true,
                    fontHeight: 1024
                }),
            )
            .on('glyphs', (glyphs: GLYPHS[]) => {
                glyphs.forEach((item) => {
                    svgMap[item.name] = item.unicode;
                });
            })
            .pipe(dest(targetDir));
    };

function iconFontTask(source: string[]) {
    return series(
        generateIconFont({
            iconGlob: source[0],
            targetDir,
            fontCssConfig,
        })
    );
}

export default series(
    parallel(
        iconFontTask(source)
    )
);
