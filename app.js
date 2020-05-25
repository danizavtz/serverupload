require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
app.disable('x-powered-by');
cors({ credentials: true, origin: true });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('uploads'));
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.use(require('./server/index'));

module.exports = app;