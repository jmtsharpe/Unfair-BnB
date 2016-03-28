var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

BenchForm = React.createClass({

	mixins: [LinkedStateMixin],

	blankAttrs: {
		lat: '',
		lng: '',
		descript: '',
		seating: ''
	},

	getInitialState: function () {
		return this.blankAttrs;
	},

	createBench: function (event) {
    event.preventDefault();
		var bench = {};

		Object.keys(this.state).forEach(function (key) {
    	bench[key] = this.state[key];
	 	}.bind(this));

    ApiUtil.createBench(bench);
		this.setState(this.blankAttrs);
  },

	render: function () {
		return(
			<form onSubmit={this.createBench}>
				<div>
					<label htmlFor='lat'>Latitude</label>
					<input
						type="text"
						id="lat"
						valueLink={this.linkState("lat")}/>
				</div>
				<div>
					<label htmlFor='lng'>Longitude</label>
					<input
						type="text"
						id="lng"
						valueLink={this.linkState("lng")}/>
				</div>
				<div>
					<label htmlFor='descript'>Description</label>
					<input
						type="text"
						id="descript"
						valueLink={this.linkState("descript")}/>
				</div>
				<div>
					<label htmlFor='seating'>Seating</label>
					<input
						type="number"
						id="seating"
						valueLink={this.linkState("seating")}/>
				</div>
				<input type="submit"/>
			</form>
		);
	}


});

module.exports = BenchForm;
