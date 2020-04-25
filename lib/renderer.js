'use strict';

const dot = require('dot');

function dotRenderer(data, locals) {
  return dot.template(data.text)(locals);
}

dotRenderer.compile = function(data) {
  return dot.compile(data.text, { filename: data.path });
};

module.exports = dotRenderer;
