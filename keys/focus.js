let focus = direction => {
  let window;
  if (Window.focused() === undefined) {
    window = Window.recent()[0];
  } else {
    window = Window.focused();
  }

  let neighbors = window.neighbors(direction);

  if (neighbors === undefined || neighbors.length > 0) {
    let index = 0;

    while (index < neighbors.length) {
      if (neighbors[index] === undefined) {
        return;
      }

      if (!neighbors[index].isVisible()) {
        index++;
      } else {
        break;
      }
    }

    if (neighbors[index] === undefined) {
      return;
    }

    neighbors[index].focus();
  }
};

// Get focus on window in direction
var focusEast = new Key("l", MOD, () => {
  focus("east");
});

var focusNorth = new Key("k", MOD, () => {
  focus("north");
});

var focusWest = new Key("h", MOD, () => {
  focus("west");
});

var focusSouth = new Key("j", MOD, () => {
  focus("south");
});