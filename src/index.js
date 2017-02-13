// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')

// END OF STUFF TO NOT MODIFY

var App = React.createClass({
  render: function(){
  var Deck = getDeck().prototype.shuffle
},


getInitialState: function() {
  return { Card: [this.state.hand}
     <Card hand={this.state.hand[0]}/>
     <Card hand={this.state.hand[1]}/>
     <Card hand={this.state.hand[2]}/>
     <Card hand={this.state.hand[3]}/>
     <Card hand={this.state.hand[4]}/>

},

  Card: function() {
    this.setState({
      getDeck: Card

getDeck().shuffle().splice(0,5)
    })

ReactDOM.render(<App />, document.getElementById("app")),
