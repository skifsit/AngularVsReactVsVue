const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
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
    path: resultPath,
    // pathinfo: true, // These extra comment are useful for debugging, especially with the eval devtool.
  },
  devtool: '',
  // stats: {
  //   colors: false,
  //   hash: true,
  //   timings: true,
  //   assets: true,
  //   chunks: true,
  //   chunkModules: true,
  //   modules: true,
  //   children: true,
  // },
  // performance: false, // The size limits are only useful on minimized assets and it has a performance cost. So it’s only enabled in production mode.
  // cache: true, // Caches modules and avoid rebuilding them when unchanged.
  module: {
    // unsafeCache: true, // Caches resolved dependencies to avoid re-resolving them.
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
    // removeAvailableModules: true, // Modules are removed from chunks when they are already available in all parent chunk groups. This reduces asset size. Smaller assets also result in faster builds since less code generation has to be performed.
    // removeEmptyChunks: true, // Empty chunks are removed. This reduces load in filesystem and results in faster builds.
    // mergeDuplicateChunks: true, // Equal chunks are merged. This results in less code generation and faster builds.
    // flagIncludedChunks: true, // Chunks which are subsets of other chunks are determined and flagged in a way that subsets don’t have to be loaded when the bigger chunk has been loaded.
    // occurrenceOrder: true, // Give more often used ids smaller (shorter) values.
    // providedExports: true, // Determine exports for each module when possible. This information is used by other optimizations or code generation. I. e. to generate more efficient code for export * from.
    // usedExports: true, // Determine used exports for each module. This depends on optimization.providedExports. This information is used by other optimizations or code generation. I. e. exports are not generated for unused exports, export names are mangled to single char identifiers when all usages are compatible. DCE in minimizers will benefit from this and can remove unused exports.
    // sideEffects: true, // Recognise the sideEffects flag in package.json or rules to eliminate modules. This depends on optimization.providedExports and optimization.usedExports. These dependencies have a cost, but eliminating modules has positive impact on performance because of less code generation. It depends on your codebase. Try it for possible performance wins.
    // concatenateModules: true, // Tries to find segments of the module graph which can be safely concatenated into a single module. Depends on optimization.providedExports and optimization.usedExports.
    // noEmitOnErrors: true, // Don’t write output assets when compilation errors.
    // namedModules: true, // Instead of numeric ids, give modules useful names.
    // namedChunks: true, // Instead of numeric ids, give chunks useful names.
    // nodeEnv: 'development', // Defines the process.env.NODE_ENV constant to a compile-time-constant value. This allows to remove development only code from code.
    // portableRecords: true, // Identifiers used in records are relative to context directory.
    runtimeChunk: { // Create a separate chunk for the webpack runtime code and chunk manifest. This chunk should be inlined into the HTML
      name: 'manifest'
    },
    // minimize: true, // Use the minimizer (optimization.minimizer, by default uglify-js) to minimize output assets.
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true // set to true if you want JS source maps
    //   }),
    //   new OptimizeCSSAssetsPlugin({})
    // ],
    splitChunks: { // Finds modules which are shared between chunk and splits them into separate chunks to reduce duplication or separate vendor modules from application modules.
      // chunks: "async",
      // minSize: 30000,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // name: true,
      cacheGroups: {
        // default: {
        //   minChunks: 2,
        //   priority: -20
        //   reuseExistingChunk: true,
        // },
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10
        // },
        default: false, // all modules duplicated in at least 2 chunks
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor', // true
          chunks: 'initial', // "initial", "async" and "all"
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
    new CleanWebpackPlugin(['dist']),
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