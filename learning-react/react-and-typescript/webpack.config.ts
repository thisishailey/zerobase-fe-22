import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server'

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    module: {
        rules: [{ test: /\.tsx$/, use: 'babel-loader', }],
    },
    optimization: { minimizer: [], },
    devServer: {
        static: './dist',
        hot: true,
    }
};

export default config;