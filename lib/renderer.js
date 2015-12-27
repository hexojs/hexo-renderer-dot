'use strict';

var dot = require('dot');

function dotRenderer(data, locals) {
  return dot.template(data.text)(locals);
}

module.exports = dotRenderer;
