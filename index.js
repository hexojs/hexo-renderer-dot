var dot = require('dot');

hexo.extend.renderer.register('dot', 'html', function(data, locals){
  return dot.template(data.text)(locals);
}, true);