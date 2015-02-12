'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactjsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactjsApp = require('../../../src/scripts/components/ReactjsApp.js');
    component = React.createElement(ReactjsApp);
  });

  it('should create a new instance of ReactjsApp', function () {
    expect(component).toBeDefined();
  });
});
