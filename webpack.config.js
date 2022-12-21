const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                    name: '[name].[ext]'
                },
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        clean: true
    }
}