var React = require('react');


var App = React.createClass({
  render: function(){
    return (
			<div>
				<div className="super-header">
					<h1 className="welcome">Welcome to UnfairBnB</h1>
					<h5 className="disclaimer">ALMOST FREE!</h5>
				</div>
				{this.props.children}
			</div>
    );
  }
});

module.exports = App;
