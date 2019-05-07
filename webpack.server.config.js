const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? 'ssr/[name].js' : 'ssr/[name].[hash].js',
        chunkFilename: devMode ? 'ssr/[name].js' : 'ssr/[name].[hash].js',
        publicPath: "/",
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    // devServer: {
    //     port: 9000,
    // },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             exclude: /\/node_modules/,
    //         }),
    //     ],
    // },
    module: {
        rules: [

            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,//"style-loader"
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ options: { sourceMap: true } }),
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
                test: /\.(js|jsx)$/,
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],

}


module.exports = (env, argv) => {
    if (argv.mode === 'development') { }
    if (argv.mode === 'production') { }
    return config;
}