const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();

app.use('/', express.static('public'));

app.get('/visitortracker/metrics.png', (req, res) => {
  // this prints the browser information
  console.debug(chalk.yellow(JSON.stringify(req.headers)));

  // this prints the host address requesting the image
  console.debug(chalk.yellow(req.header('x-forwarded-for') || req.connection.remoteAddress));
  res.sendFile(path.join(__dirname, './images/metric.png'));
});

module.exports = app;
