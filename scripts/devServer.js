import express from 'express';
import webpack from 'webpack';
import path from 'path';

import webpackConfig from '../webpack.config.dev';


const app = express();
const compiler = webpack(webpackConfig);
const port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listening on port:${port}`);
  }
});
