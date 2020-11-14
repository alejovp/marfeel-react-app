const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const APP_DIR = path.join(__dirname, 'src');
const PUBLIC_DIR = path.join(__dirname, 'public');
const ENV = process.env.NODE_ENV;
const isLocalEnv =  ENV === 'local';

module.exports = {
    mode: isLocalEnv ? 'development' : 'production',
    devtool: isLocalEnv ? 'eval-source-map' : undefined,
    entry: {
        index: `${APP_DIR}/index.js`
    },
    devServer: {
        contentBase: PUBLIC_DIR,
        historyApiFallback: true,
        open: true,
        compress: true,
        port: 8081,
    },
    output: {
        filename: '[name].[contenthash].js',
        sourceMapFilename: '[name].js.map',
        path: PUBLIC_DIR,
    },
    optimization: {
        moduleIds: 'deterministic',
        chunkIds: 'named',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.s?css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ],
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
            // {
            //   test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
            //   loader: 'file-loader',
            //   include: [
            //     APP_DIR,
            //     path.resolve(__dirname, 'node_modules/semantic-ui-css/')
            //   ],
            //   options: {
            //     name: '[name]-[sha256:hash:base64:4].[ext]',
            //     publicPath: 'dist/images/',
            //     outputPath: './images/'
            //   }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Marfeel react app',
            hash: true,
            inject: true,
            mobile: true,
            template: `${APP_DIR}/index.ejs`,
            filename: `${PUBLIC_DIR}/index.html`,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            favicons: []
        })
    // new BundleAnalyzerPlugin({
    //   analyzerMode: ENV === 'stats' ? 'server' : 'disabled'
    // })
    ]
};
