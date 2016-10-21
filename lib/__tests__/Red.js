'use strict';

var _ = require('../');

var primary = new _.Color({ r: 244, g: 67, b: 54 });

var Red = (0, _.palletes)(primary);
var color = Red['500'];

var Keys = ['50'];
for (var i = 100; i < 1000; i = i + 100) {
  Keys.push(String(i));
}

Keys.forEach(function (key) {
  var color = Red[key];
  console.log(key + ': ' + (0, _.hex)(color));
});