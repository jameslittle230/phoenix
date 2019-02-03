function cw_rect(x1, y1, x2, y2) {
  var win = Window.focused();
  var scr_rect = win.screen().flippedVisibleFrame();

  var rect = {
    x: scr_rect.width * x1,
    y: scr_rect.height * y1,
    width: scr_rect.width * (x2 - x1),
    height: scr_rect.height * (y2 - y1)
  };

  Phoenix.log(rect.x, rect.y, rect.width, rect.height);

  win.setFrame(rect);
}

function cw_topleft() {
  cw_rect(0, 0, 0.5, 0.5);
}

function cw_tophalf() {
  cw_rect(0, 0, 1, 0.5);
}

function cw_topright() {
  cw_rect(0.5, 0, 1, 0.5);
}

function cw_lefthalf() {
  cw_rect(0, 0, 0.5, 1);
}

function cw_righthalf() {
  cw_rect(0.5, 0, 1, 1);
}

function cw_bottomleft() {
  cw_rect(0, 0.5, 0.5, 1);
}

function cw_bottomhalf() {
  cw_rect(0, 0.5, 1, 1);
}

function cw_bottomright() {
  cw_rect(0.5, 0.5, 1, 1);
}

function cw_full() {
  cw_rect(0, 0, 1, 1);
}

function cw_center() {
  var window = Window.focused();
  var screen = window.screen().flippedVisibleFrame();

  if (window) {
    window.setTopLeft({
      x: screen.x + (screen.width / 2) - (window.frame().width / 2),
      y: screen.y + (screen.height / 2) - (window.frame().height / 2)
    });
  }
}