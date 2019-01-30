const MOD = ["ctrl", "alt", "cmd"];
const MOD_S = [...MOD, "shift"];
const HALF_CORRECTION = 6; // Fix padding issues for half screen windows

var scr = Screen.main().flippedVisibleFrame();

// Padding Values
var paddingTop = 35;
var paddingLeft = 15;
var paddingRight = 30;
var paddingBottom = 25;
var paddingCenter = 10;
var paddingMiddle = 20;
// Computed sizes
var halfWidth = Math.round((scr.width - paddingLeft - paddingRight) / 2);
var halfHeight = Math.round(
  (scr.height - paddingTop - paddingBottom) / 2 + HALF_CORRECTION
);

var thirdWidth = Math.round((scr.width - paddingLeft - paddingRight) / 3);

var windowLocations = {
  full: function() { return {
    y: paddingTop,
    x: paddingLeft,
    width: scr.width - paddingRight,
    height: scr.height - paddingBottom
  }},
  left: {
    y: paddingTop,
    x: paddingLeft,
    width: halfWidth - paddingCenter,
    height: scr.height - paddingBottom
  },
  right: {
    y: paddingTop,
    x: halfWidth + paddingLeft + paddingCenter,
    width: halfWidth,
    height: scr.height - paddingBottom
  },
  //Corners
  topRight: {
    y: paddingTop,
    x: halfWidth + paddingLeft + paddingCenter,
    width: halfWidth,
    height: halfHeight
  },
  bottomRight: {
    y: halfHeight + paddingTop + paddingMiddle,
    x: halfWidth + paddingLeft + paddingCenter,
    width: halfWidth,
    height: halfHeight
  },
  topLeft: {
    y: paddingTop,
    x: paddingLeft,
    width: halfWidth - paddingCenter,
    height: halfHeight
  },
  bottomLeft: {
    y: halfHeight + paddingTop + paddingMiddle,
    x: paddingLeft,
    width: halfWidth - paddingCenter,
    height: halfHeight
  },
  // Extra sizes
  rightTwoThirds: {
    y: paddingTop,
    x: thirdWidth + paddingLeft + paddingCenter,
    width: thirdWidth * 2,
    height: scr.height - paddingBottom
  },
  leftTwoThirds: {
    y: paddingTop,
    x: paddingLeft,
    width: thirdWidth * 2 - paddingCenter,
    height: scr.height - paddingBottom
  },
  leftThird: {
    y: paddingTop,
    x: paddingLeft,
    width: thirdWidth - paddingCenter,
    height: scr.height - paddingBottom
  },
  rightThird: {
    y: paddingTop,
    x: thirdWidth * 2 + paddingLeft + paddingCenter,
    width: thirdWidth,
    height: scr.height - paddingBottom
  }
};
