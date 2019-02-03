Phoenix.set({
  daemon: true,
  openAtLogin: true
});

require("constants.js");
require("move.js");
require("keys.js");

Phoenix.notify("Reloaded");
