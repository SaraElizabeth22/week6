//My page will not load, spent a long time on the different areas and reviewed videos/Slack but still did not work - assume there will be partial credit given I have all of the elements included in the code?//

var React = require('react')

var Card = React.createClass({
  Card: function() {
    this.props.Card(this.props.Card)

    return (
        <div className="col-sm-2">
          <h1><img onClick={this.Card} className="img-responsive" src={this.hand.Card} /></h1>
        </div>

    )
  }

})

module.exports = Card
