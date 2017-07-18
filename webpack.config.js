module.exports = {
    entry: './scripts/app.js',
    output: {
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },

  watch: true,

  watchOptions: {
    aggregateTimeout: 150
  }
};
