const express = require('express');
const debug = require('debug')('app:server');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

app.use(express.json());

moviesApi(app);

app.listen(config.port, () => {
  debug(`Listening http://localhost:${config.port}`);
});
