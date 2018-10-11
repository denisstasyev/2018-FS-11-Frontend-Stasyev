module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
        include: __dirname + '/src',
       }
    ],
  }
};