const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(bodyParser());

app.get('*', (req, res) => res.status(200).send({message: 'Welcome to the beginning of nothingness.',}));

app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;
