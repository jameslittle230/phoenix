function moveFocusedWindow(location) {
  scr = Screen.main().flippedVisibleFrame();
  Phoenix.log(scr.width)
  var win = Window.focused();

  win.setFrame(location)
}

var left = new Key("a", MOD, () => {
  if (_.isEqual(Window.focused().frame(), windowLocations.left)) {
    moveFocusedWindow(windowLocations.leftThird);
    return;
  }

  if (_.isEqual(Window.focused().frame(), windowLocations.leftThird)) {
    moveFocusedWindow(windowLocations.leftTwoThirds);
    return;
  }

  moveFocusedWindow(windowLocations.left);
  Window.focused().neighbors("east").forEach(w => w.setFrame(windowLocations.right));
});

var right = new Key("d", MOD, () => {
  if (_.isEqual(Window.focused().frame(), windowLocations.right)) {
    moveFocusedWindow(windowLocations.rightThird);
    return;
  }

  if (_.isEqual(Window.focused().frame(), windowLocations.rightThird)) {
    moveFocusedWindow(windowLocations.rightTwoThirds);
    return;
  }

  moveFocusedWindow(windowLocations.right);
  Window.focused().neighbors("west").forEach(w => w.setFrame(windowLocations.left));
});

// Move focused window to corners
var topRight = new Key("e", MOD, () => {
  moveFocusedWindow(windowLocations.topRight);
});

var topLeft = new Key("q", MOD, () => {
  moveFocusedWindow(windowLocations.topLeft);
});

var bottomRight = new Key("c", MOD, () => {
  moveFocusedWindow(windowLocations.bottomRight);
});

var bottomLeft = new Key("z", MOD, () => {
  moveFocusedWindow(windowLocations.bottomLeft);
});

// Maximize window (not fullscreen)
var maximizeWindow = new Key("r", MOD, () => {
  moveFocusedWindow(windowLocations.full); //.maximize();
});

var nextScreen = new Key("v", MOD, () => {
  Phoenix.log("Got here")
  Screen.all()[1].currentSpace().addWindows([Window.focused()]);
  moveFocusedWindow(windowLocations.full);
});

// Minimize window
let minimizeWindow = new Key("n", MOD, () => {
  if (Window.recent().length < 1) {
    return;
  }

  if(!Window.focused()) {
    Phoenix.log(Window.recent()[0])
    if(Window.recent()[0].focus()) {
      Window.focused().minimize();
    }
  } else {
    Window.focused().minimize();
  }
});

let fullscreenWindow = new Key("f", MOD, () => {
  let w = Window.focused();
  if (w.isFullScreen()) {
    Window.focused().setFullScreen(false);
  } else {
    Window.focused().setFullScreen(true);
  }
});

let centerWindow = new Key("s", MOD, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    window.setTopLeft({
      x: screen.x + (screen.width / 2) - (window.frame().width / 2),
      y: screen.y + (screen.height / 2) - (window.frame().height / 2)
    });
  }
});