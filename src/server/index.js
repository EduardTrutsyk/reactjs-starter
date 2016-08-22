import express from 'express';
import config from '../../config';
import path from 'path';

const app = express();
const port = config.env.PORT;

app.set('port', port);
app.use(express.static(path.join(__dirname, '../../dist/client/')));

app.get('*', (request, response) => {
  response.sendfile('./public/index.html');
});

app.listen(app.get('port'), () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
