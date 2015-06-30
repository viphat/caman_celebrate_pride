Caman('#image', function() {
  // this.hue(90);
  this.newLayer(function() {
    // Change the blending mode
    this.setBlendingMode('multiply');

    // Change the opacity of this layer
    this.opacity(80);

    this.fillColor('#ffffff');
    this.filter.rainbow();

    // Now, we can call any filter function though the
    // filter object.
    this.filter.brightness(10);
    this.filter.contrast(30);
  });

  this.render();

});

var convertHexToRGB = function(hex) {
  var r;
  var g;
  var b;

  if (hex.charAt(0) === '#') {
    hex = hex.substr(1);
  }

  r = parseInt(hex.substr(0, 2), 16);
  g = parseInt(hex.substr(2, 2), 16);
  b = parseInt(hex.substr(4, 2), 16);
  return {
    r: r,
    g: g,
    b: b
  };
};

Caman.Filter.register('rainbow', function() {
  height = this.originalHeight;

  colorRed = convertHexToRGB('#E40303');
  colorOrange = convertHexToRGB('#FF8C00');
  colorYellow = convertHexToRGB('#FFED00');
  colorGreen = convertHexToRGB('#008026');
  colorBlue = convertHexToRGB('#004DFF');
  colorPurple = convertHexToRGB('#750787');

  this.process('rainbow', function(rgba) {
    y = Math.floor(rgba.loc / (rgba.c.originalWidth * 4));
    x = (rgba.loc % (rgba.c.originalWidth * 4)) / 4;
    if (y >= 0 && y <= height / 6) {
      rgba.r = colorRed.r;
      rgba.g = colorRed.g;
      rgba.b = colorRed.b;
    }

    if (y > height / 6 && y <= height * 2 / 6) {
      rgba.r = colorOrange.r;
      rgba.g = colorOrange.g;
      rgba.b = colorOrange.b;
    }

    if (y > height * 2 / 6 && y <= height * 3 / 6) {
      rgba.r = colorYellow.r;
      rgba.g = colorYellow.g;
      rgba.b = colorYellow.b;
    }

    if (y > height * 3 / 6 && y <= height * 4 / 6) {
      rgba.r = colorGreen.r;
      rgba.g = colorGreen.g;
      rgba.b = colorGreen.b;
    }

    if (y > height * 4 / 6 && y <= height * 5 / 6) {
      rgba.r = colorBlue.r;
      rgba.g = colorBlue.g;
      rgba.b = colorBlue.b;
    }

    if (y > height * 5 / 6 && y <= height) {
      rgba.r = colorPurple.r;
      rgba.g = colorPurple.g;
      rgba.b = colorPurple.b;
    }

    return rgba;
  });
});
