'use strict';

var React = require('react/addons');

require('../../styles/Shelf.css');

var Book = require('./Book');

var Shelf = React.createClass({
  getInitialState: function(){
  	return {
  		books: this.props.books
  	};
  },
  render: function () {
    return (
        <div className='shelf'>
          { 
	          this.state.books.map(function(book, i){

	        		return <Book name={book.name} year={book.year} author={book.author}/> ;
	          })
          }
        </div>
      );
  }
});

module.exports = Shelf; 

