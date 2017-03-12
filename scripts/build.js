import webpack from 'webpack';

import * as logger from '../modules/logger';
import webpackConfig from '../webpack.config.prod';


webpack(webpackConfig, (err, stats) => {
  if (err) {
    return logger.error(err);
  }
  const statsJson = stats.toJson();
  if (stats.errors) {
    return logger.error('err', statsJson.errors);
  }

  if (stats.warnings) {
    return logger.warn(statsJson.warnings);
  }
  return logger.info('Webpack built successfully');
});

