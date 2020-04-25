'use strict';

require('chai').should();

describe('hexo-renderer-dot', () => {
  const r = require('../lib/renderer');

  it('default', () => {
    const result = r({
      text: 'Hi {{=it.name}}! {{=it.age}}'
    }, {
      name: 'John',
      age: 31
    });

    result.should.eql('Hi John! 31');
  });

  it('compile', () => {
    const body = 'Hi {{=it.name}}! {{=it.age}}';
    const render = r.compile({ text: body });
    const result = render({ name: 'John', age: 31 });

    result.should.eql('Hi John! 31');
  });
});
