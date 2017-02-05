var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../../server/schema.json');

module.exports = getBabelRelayPlugin(schema.data);

