const express = require('express');
const path = require('path');
const port = 8080;
const handlers = require('./handlers/');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/feed', handlers.feed);

module.exports.start = function () {
  return Promise.resolve()
    .then(() => app.listen(port))
    .catch(err => { console.log(err) });
};
