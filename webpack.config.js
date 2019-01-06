const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './docs',
	},
	plugins: [
		new CleanWebpackPlugin([ 'docs' ]),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			inject: 'body',
		}),
	],
	output: {
		path: path.resolve(__dirname, './docs'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				type: 'javascript/auto',
			},
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/', // where the fonts will go
							publicPath: '../', // override the default path
						},
					},
				],
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
		],
	},
}
