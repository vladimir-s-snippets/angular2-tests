var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
	entry: './ts/boot.ts',

	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'js/[name].js',
        chunkFilename: '[id].chunk.js'
	},
    
    watch: true,
    
    devtool: 'source-map',

    resolve: {
        // ensure loader extensions match
        extensions: ['','.ts','.js','.json','.css','.html']
    },
  
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts'
			}
		]
	},
    
    plugins: [
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([
            { from: './index.html' },
            { from: './favicon.ico' }
        ]),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['build']
            },
            browser: ['chrome']
        })
    ]
}