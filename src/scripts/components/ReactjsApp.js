'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var Shelf = require('./Shelf');

var imageURL = require('../../images/yeoman.png');

var books = [{id:'1', name: 'A Story Book', year: 1990, author: 'Someone'},
  		{id:'2', name: 'Another Story Book', year: 1991, author: 'Someone else'}];

var ReactjsApp = React.createClass({
  getInitialState: function(){
  	return {
  		
  	};
  },

  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
        	<Shelf books={books}/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ReactjsApp;
