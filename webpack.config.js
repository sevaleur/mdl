const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'dev'

const dir_app = path.join(__dirname, 'app')
const dir_shared = path.join(__dirname, 'shared')
const dir_styles = path.join(__dirname, 'styles')
const dir_node = 'node_modules'

module.exports = {
    entry: [
        path.join(dir_app, 'index.js'),
        path.join(dir_styles, 'index.scss')
    ],

    resolve: {
        modules: [
            dir_app,
            dir_shared,
            dir_styles,
            dir_node
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            IS_DEV
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './shared',
                    to: '',
                    noErrorOnMissing: true
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2|fnt|webp)$/,
                loader: 'file-loader',
                options: {
                    name(file) {
                        return '[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(glsl|frag|vert)$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(glsl|frag|vert)$/,
                loader: 'glslify-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}
