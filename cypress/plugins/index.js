/* eslint-disable */
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
/* eslint-enable */

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};
