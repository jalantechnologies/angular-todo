const path = require('path');
const express = require('express');
const config = require('config');

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.listen(config.get('www.port'));
