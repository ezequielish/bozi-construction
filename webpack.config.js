const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const config = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {

        port: 9000
    },

    module: {
        rules: [

            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,//"style-loader" creates style nodes from JS strings
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },// translates CSS into CommonJS |
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({options: { sourceMap: true }}),
                                require('postcss-nesting'),
                                require('postcss-apply'),
                                require('postcss-custom-media')({
                                    preserve: false
                                }),
                                require('postcss-preset-env')(),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader',
                        name: devMode ? 'img/[name].[ext]' : 'img/[name].[hash].[ext]',
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        })
    ],

}


module.exports = (env, argv) => {
    if (argv.mode === 'development') { }
    if (argv.mode === 'production') { }
    return config;
}
