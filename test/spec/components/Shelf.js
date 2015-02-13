'use strict';

describe('Shelf', function () {
  var React = require('react/addons');
  var Shelf, component;

  beforeEach(function () {
    Shelf = require('../../../src/scripts/components/Shelf.js');
    component = React.createElement(Shelf);
  });

  it('should create a new instance of Shelf', function () {
    expect(component).toBeDefined();
  });
});
