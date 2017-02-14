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
dealClicked: function() {
  this.setState({
    hand: getDeck().shuffle().splice(0,5)
})
},


  getInitialState: function() {
  render: function(){
    return {
      hand: ["face_down","face_down","face_down","face_down","face_down"]
    }
},
  render: function() {
    return (
    <div>
        <h1> Welcome to Sara's Casino! </h1>
        <div className="row">
          <Card/>
            <Card face={this.state.Card1}/>
            <Card face={this.state.Card2}/>
            <Card face={this.state.Card3}/>
            <Card face={this.state.Card4}/>
            <Card face={this.state.Card5}/>
        </di
        <h1><a href-"#" onClick={this.dealClicked} className="btn btn-success">Desl</a></h1>
v>
      </div>
    )
  var Deck = getDeck().prototype.shuffle
},

var App = React.createClass({
getInitialState: function() {
  return {
    <Card  face={this.state.hand[0]}/>
    <Card  face={this.state.hand[1]}/>
    <Card  face={this.state.hand[2]}/>
    <Card  face={this.state.hand[3]}/>
    <Card  face={this.state.hand[4]}/>

},

  Card: function() {
    this.setState({
      getDeck: Card

ReactDOM.render(<App />, document.getElementById("app")),
