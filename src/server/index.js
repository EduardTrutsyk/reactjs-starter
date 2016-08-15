import Express from 'express';
import http from 'http';
import path from 'path';

const app = new Express();
const server = new http.Server(app);

app.use(Express.static(path.join(__dirname, '../../build/client/')));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname + '../../build/client/index.html'));
// });

//if (config.port) {
  server.listen(8080, (err) => {
    if (err) {
      console.error(err);
    }
    //console.info('----\n==> ✅  %s is running, talking to API server on %s.', config.app.title, config.apiPort);
    //console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
//} else {
  //console.error('==>     ERROR: No PORT environment variable has been specified');
//}
