var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

var dot = require('dot');

hexo.extend.renderer.register('dot', 'html', function(data, locals){
  return dot.template(data.text)(locals);
}, true);
