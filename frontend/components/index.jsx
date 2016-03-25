React = require('react');
BenchStore = require('../stores/bench');


Index = React.createClass({
	getInitialState: function () {
		return({ benches: BenchStore.all() });
	},

	componentDidMount: function () {
		BenchStore.addListener();
	},
	render: function () {
		newbenches = this.state.benches.map(function
			(bench) {
				return <li>{bench.description}</li>;
		});


		return(
			<ul>{newbenches}</ul>
		);
	}
});

module.exports = Index;
