const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		app: ['./src/main.js','./src/scss/app.scss'],
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
			lib: path.resolve('src', 'lib'),
			app: path.resolve('src', 'app'),
		},
		extensions: ['.mjs', '.js', '.svelte', '.ts'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public/app',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: { emitCss: true, hotReload: true }
				}
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		// new CopyPlugin([
		// 	{ from: 'source', to: '../' },
		// ]),
	],
	devtool: prod ? false: 'source-map'
};
