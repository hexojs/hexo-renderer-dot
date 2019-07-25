'use strict';

const should = require('chai').should(); // eslint-disable-line

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
});
