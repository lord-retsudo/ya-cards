const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // �������� ������

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
//      {
//        test: /\.css$/,
//        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // �������� ����䨪��� CSS
//      },
      {
        	test: /\.(png|jpg|gif|ico|svg)$/,
	        use: [
        	        'file-loader?name=./images/[name].[ext]', // 㪠���� �����, �㤠 ᪫��뢠�� ����ࠦ����
                	{
                        	loader: 'image-webpack-loader',
	                        options: {}
        	        },
	        ]
      },
      {
                test: /\.css$/i,
                use: [
                        (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                               'css-loader', 
                               'postcss-loader'
                     ]
       },
       {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=./vendor/[name].[ext]'
       }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
       'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
        preset: ['default'],
        },
        canPrint: true
    }) 

  ]
};


