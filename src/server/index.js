import Express from 'express';
import http from 'http';
import path from 'path';
import config from '../../config';

const app = new Express();
const server = new http.Server(app);

const port = config.env.PORT;

app.use(Express.static(path.join(__dirname, '../../dist/client/')));

server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
