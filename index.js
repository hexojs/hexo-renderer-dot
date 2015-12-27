/* global hexo */

'use strict';

hexo.extend.renderer.register('dot', 'html', require('./lib/renderer'), true);
