// https://github.com/fluent/fluent-logger-forward-node

const FluentClient = require("@fluent-org/logger").FluentClient;
const logger = new FluentClient("tag_prefix", {
  socket: {
    host: "localhost",
    port: 24224,
    timeout: 3000, // 3 seconds
  }
});
