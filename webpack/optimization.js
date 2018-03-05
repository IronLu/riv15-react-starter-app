const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const optimization = {
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /node_modules/,
        chunks: "all"
      }
    }
  },
  // splitChunks: {
  //   cacheGroups: {
  //       vendor: {
  //           test: /node_modules/, // you may add "vendor.js" here if you want to
  //           name: "vendor",
  //           chunks: "initial",
  //           enforce: true
  //       }
  //   }
  // },
  minimizer: [
    new UglifyJSPlugin({
      uglifyOptions: {
        beautify: false,
        compress: true,
        comments: false,
        sourceMap: true
      }
    })
  ]
}

module.exports = optimization
