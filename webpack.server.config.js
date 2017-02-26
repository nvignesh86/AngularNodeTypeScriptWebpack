const root = require('app-root-path').path;
module.exports = {
    entry: `${root}/server.ts`,
    target: 'node',
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    output: {
        filename: 'compiled', // output file
        path: `${root}/build`,
        libraryTarget: "commonjs"
    },
    resolve: {
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    resolveLoader: {
        modules: ['node_modules',`${root}/node_modules`]
    },
    module: {
        loaders: [{
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            test: /\.tsx?$/,
            exclude: 'node_modules',
            loader: 'ts-loader'
        }]
    }
};