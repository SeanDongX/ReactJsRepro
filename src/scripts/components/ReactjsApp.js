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

var shelves = [];

var shelf1 = [{id:'1', name: 'A Story Book', year: 1990, author: 'Someone'},
  		{id:'2', name: 'Another Story Book', year: 1991, author: 'Someone else'}];

var shelf2 = [{id:'1', name: 'A Magazine', year: 1990, author: 'Magaziner'},
      {id:'2', name: 'Another Magazine', year: 1991, author: 'Maganizer'}];

shelves.push(shelf1);
shelves.push(shelf2);

var ReactjsApp = React.createClass({
  getInitialState: function(){
  	return {
  		
  	};
  },

  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          {
              shelves.map(function(s, i){
                return <Shelf books={s} />
              })
          }
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ReactjsApp;
