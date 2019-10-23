const { config } = require('../config');
const debug = require('debug')('app:cache');

function cacheResponse(res, seconds) {
  if (!config.dev) {
    res.set('Cache-Control', `public, max-age=${seconds}`);
  } else {
    debug('Started in development mode, no cache');
  }
}

module.exports = cacheResponse;
