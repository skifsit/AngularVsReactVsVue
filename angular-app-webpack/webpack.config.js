const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const resultPath = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: {
    app: './src/main.ts',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: resultPath
  },
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "@ngtools/webpack"
      },
      {
        test: /\.html$/,
        // use: [ {
        //   loader: 'file-loader',
        //   options: {
        //     name: '[path][name].[ext]'
        //   }
        // }, {
        //   loader: 'file-loader',
        //   options: {
        //     name: '[path][name].[ext]'
        //   }
        // }],
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        // use: [MiniCssExtractPlugin.loader, "css-loader"]
        // use: ['style-loader', 'css-loader']
        use: ['raw-loader']
      }
    ]
  },
  optimization: {
    // minimizer: [],
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true // set to true if you want JS source maps
    //   }),
    //   new OptimizeCSSAssetsPlugin({})
    // ],
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
          // chunks: 'all'
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.css$/,
        //   chunks: 'all',
        //   enforce: true
        // }
      }
    }
  },
  plugins: [
    new AngularCompilerPlugin({
      "mainPath": "main.ts",
      "platform": 0,
      "hostReplacementPaths": {
        "environments/environment.ts": "environments/environment.ts"
      },
      "sourceMap": true,
      "tsConfigPath": "src/tsconfig.app.json",
      "skipCodeGeneration": true,
      "compilerOptions": {}
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // }),
    // new CleanWebpackPlugin(['dist']),
    // webpack.optimize.splitChunks({
    //   name: 'vendor' // Specify the common bundle's name.
    // })
    // new UglifyJsPlugin(/* ... */),
    // new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    // hot: true,
    port: 9661,
    before(app){
      app.get('*', function(req, res, next) {
        console.log(req.url)
        next()
      });
    }
  }
}