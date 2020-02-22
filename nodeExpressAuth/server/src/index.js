const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const debug = require('debug')('app');

require('dotenv').config();

const app = express();

// load middlewares - morgan (for logging) and helmet (for setting various HTTP headers)
app.use(morgan('common'));
app.use(helmet());
app.use(express.json());

const port = process.env.PORT || 1234;
app.listen(port, () => debug(`Listening at: http://localhost:${port}/`));
