var React = require('react');
var Gmap = require('./map');
var Index = require('./index');


Search = React.createClass({
	render: function () {
		return(
			<div>
				<Gmap />
				<Index />
			</div>
		);
	}
});

module.exports = Search;
