const path = require('path');

module.exports =  {
  entry: './src/client/js/index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, './src/public/js'),
    filename: 'bundle.js'
  }
};
