import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

import paths from './paths';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin({
          exclude: ['CNAME']
        }),
        new CopyWebpackPlugin([
          { from: path.resolve(paths.root, 'src', 'CNAME'), to: paths.outputPath}
        ]),
    ],
    devtool: 'source-map'
};