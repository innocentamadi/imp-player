import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 8080; // Or your other favorite port
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static('/'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.info('==> <img draggable="false" class="emoji" alt="🌎" src="https://s.w.org/images/core/emoji/72x72/1f30e.png"> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
  }
});
