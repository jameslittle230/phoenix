let info_windowsI = new Key("i", MOD_S, () => {
  const windows = Space.active().windows();

  for (window of windows) {
    if (window.isVisible()) {
      windowFrame = window.frame();
      screen = Screen.main().flippedVisibleFrame();

      Modal.build({
        origin(modal) {
          return {
            x: windowFrame.x + windowFrame.width / 2 - modal.width / 2,
            y: screen.height - windowFrame.y - windowFrame.height / 2
          };
        },
        weight: 16,
        duration: 2,
        appearance: "dark",
        icon: window.app().icon(),
        text: window.app().name()
      }).show();
    }
  }
});

let info_spaces = new Key("i", MOD, () => {
  const spaces = Space.all();

  for (let [index, screen] of Screen.all().entries()) {
    var content = ""
    for (let [index, space] of screen.spaces().entries()) {
      content += space.windows().map(window =>
        window.app().name()
      )
    }

    Phoenix.log(content)

    Modal.build({
      origin(modal) {
        return {
          x: screen.visibleFrame().x,
          y: screen.visibleFrame().y
        };
      },
      weight: 16,
      duration: 4,
      appearance: "dark",
      text: content
    }).show();
  }
});
