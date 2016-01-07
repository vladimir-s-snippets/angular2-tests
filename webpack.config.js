module.exports = {
	entry: './src/ts/app.ts',

	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'js/[name].js'
	},

	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{test: /\.html$/, loader: 'raw'}
		]
	}
}