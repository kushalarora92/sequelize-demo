const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const createError = require('http-errors')

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const models = require('./models');
models.sequelize.sync().then(() => {
    console.log('Db looks fine!')
}).catch((err) => {
    console.error(err, "Something went wrong with db update")
})

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({message: 'Welcome to the beginning of nothingness.',}));

app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;
