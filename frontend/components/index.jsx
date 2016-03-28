var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');


Index = React.createClass({
	getInitialState: function () {
		return({ benches: BenchStore.all() });
	},

	componentDidMount: function () {
		BenchStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		BenchStore.removeListener(this._onChange);
	},

	_onChange: function () {
		this.setState({ benches: BenchStore.all() });
	},

	render: function () {
		newbenches = this.state.benches.map(function
			(bench, i) {
				key = "bench-" + i;
				return <li key={key}>{bench.description}</li>;
		});


		return(
			<ul>{newbenches}</ul>
		);
	}
});

module.exports = Index;
