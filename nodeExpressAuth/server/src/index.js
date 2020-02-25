const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const debug = require('debug')('app');

require('dotenv').config();

const authRouter = require('./auth/auth.router');
const placesRouter = require('./places/places.router');
const { notFound, errorHandler } = require('./common/middlewares/errorHandling');

const app = express();

// load middlewares - morgan (for logging) and helmet (for setting various HTTP headers)
app.use(morgan('common'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// auth
app.use('/auth', authRouter);

// places API
app.use('/api/places', placesRouter);

// handle errors
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 1234;
app.listen(port, () => debug(`Listening at: http://localhost:${port}/`));
