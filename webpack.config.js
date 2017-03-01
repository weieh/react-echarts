var webpack = require('webpack');

module.exports = {
   entry:{
       app:__dirname + '/src/main.js',
   },
   output: {
	   path: __dirname,
	   publicPath: "/",
	   filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 9999,
	  noInfo: false,
   },
	
   module: {
      loaders: [ 
	      {
	         test: /\.jsx?$/,
	         exclude: /node_modules/,
	         loader: 'babel',
	         query: {
	            presets: ['es2015', 'react']
	         }
	      },
	      {
             test: /\.scss|\.css$/,
             loader:  'style-loader!css-loader'
          }
      ]
   }
}
