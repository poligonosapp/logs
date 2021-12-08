// https://github.com/fluent/fluent-logger-forward-node

const FluentClient = require("@fluent-org/logger").FluentClient;
const logger = new FluentClient("tag_prefix", {
  eventRetry: {}
});
