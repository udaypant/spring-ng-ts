var path = require("path");
var webpack = require("webpack");
//var extractTextPlugin = require("extract=text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var appName = "spring-ng-ts";

module.exports = {
	node: {
		child_process: "empty",
		fs: "empty"
	},
	context: path.join(__dirname, "src"),
	devtool: "source-map",
	module: {
		loaders: [
		          {
		        	  test: /\.less$/,
		        	  loader: "style!css!less"
		          },{
		        	  test: /\.css$/,
		        	  loader: "style!css"
		          },{
		        	  test: /\.html$/,
		        	  loader: "file?name=[name].[ext]"
		          },{
		        	  test: /\.json$/,
		        	  loader: "file?name=[name].[ext]"
		          },{
		        	  test: /\.(woff|eot|ttf|svg|gif|png|ico|woff(2))(\?.*)?$/,
		        	  loader: "url-loader?limit=100000"
		          },{
		        	  test: /\.ts$/,
		        	  loader: "ts-loader"
		          }]
	},
	entry: {
		webpackDevServer : "webpack/hot/dev-server",
		less: "./less/app-styles.less",
		index: "./ts/index.ts"
	},
	output: {
		filename: "js/[name].js",
		path: path.join(__dirname, "dist/app"),
		publicPath: "",
		sourceMapFilename: "debugging/[file].map"
	},
	plugins: [ new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		"window.jQuery": "jquery"
	}),
	new webpack.DefinePlugin({
		"require.specified":"require.resolve"
	}),
	new HtmlWebpackPlugin({
		hash: true,
		title: "Index",
		filename: "index.html",
		favicon: "src/favicon.png",
		template: "src/index.html",
		inject: "head"
	})],
	resolve: {
		alias: {
			"angular": "angular"
		},
		extensions: ["",".webpack.js","web.js",".ts",".js",".json"]
	},
	resolveLoader: {
		root: [__dirname, path.join(__dirname, "node_modules")]
	}
};