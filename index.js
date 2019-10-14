const express = require('express');
const debug = require('debug')('app:server');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

//body parser
app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  debug(`Listening http://localhost:${config.port}`);
});
