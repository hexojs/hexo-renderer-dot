'use strict';

var should = require('chai').should(); // eslint-disable-line

describe('hexo-renderer-dot', function() {
  var r = require('../lib/renderer');

  it('default', function() {
    var result = r({
      text: 'Hi {{=it.name}}! {{=it.age}}'
    }, {
      name: 'John',
      age: 31
    });

    result.should.eql('Hi John! 31');
  });
});
