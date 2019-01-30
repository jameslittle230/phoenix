const DOUBLE_KEY_INTERVAL = 250;

require("./constants.js");
require("./keys/movement.js");
require("./keys/focus.js");
require("./keys/info.js");

Phoenix.set({
  daemon: true,
  openAtLogin: true
});

Phoenix.notify("Loaded");
