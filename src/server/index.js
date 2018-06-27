const express = require('express');
const path = require('path');
const port = 8080;
const handlers = require('./handlers/');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/feed', handlers.feed);

const start = function start() {
  return Promise.resolve()
    .then(() => app.listen(port))
    .catch(err => { console.log(err) });
};

module.exports = {
  start,
  app
};
