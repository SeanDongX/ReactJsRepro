'use strict';

var React = require('react/addons');

require('../../styles/Book.css');


var Book = React.createClass({
  getInitialState: function(){
  	return {
  		name: this.props.name,
  		author: this.props.author,
  		year: this.props.year,
  	};
  },

  render: function () {
    return (
        <div className='bookCoverStyle'>
          <p className='bookCoverTextBlock title'>{this.state.name}</p>
          <p className='bookCoverTextBlock subTitle'>{this.state.year} &nbsp; {this.state.author}</p>
        </div>
      );
  }
});

module.exports = Book; 

