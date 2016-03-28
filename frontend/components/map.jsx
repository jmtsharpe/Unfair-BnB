var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var markers = [];

Gmap = React.createClass({

	getInitialState: function () {
		return({ benches: BenchStore.all });
	},

	componentDidMount: function () {
		var mapDOMNode = this.refs.map;
		var mapOptions = {
			center: {lat: 40.725032, lng: -73.996885},
			zoom: 13
		};
		this.map = new google.maps.Map(mapDOMNode, mapOptions);

		this.benchListener = BenchStore.addListener(this._onChange);
		this.idleListener = this.map.addListener('idle', this.handleIdle);
	},

	handleIdle: function () {
		LatLngBounds = this.map.getBounds();
		nE = LatLngBounds.getNorthEast();
		sW = LatLngBounds.getSouthWest();
		bounds = {
		northEast: { "lat": nE.lat().toString(), "lng": nE.lng().toString() },
		southWest: { "lat": sW.lat().toString(), "lng": sW.lng().toString() }
	};

		ApiUtil.fetchBenches({bounds});
	},

	componentWillUnmount: function () {
		this.benchListener.remove();
		this.idleListener.remove();
	},

	render: function () {
		return (
			<div className="map" ref="map"></div>
		);
	},

	_onChange: function () {
		this.setState({ benches: BenchStore.all() });
		this.removeMarkers();
		this.addMarkers(this.state.benches);
	},

	removeMarkers: function () {
		for (var i = 0; i < markers.length; i++) {
		  markers[i].setMap(null);
		}
		markers = [];
	},


	addMarkers: function (benches) {

		benches.forEach(function (bench) {
			
			var myLatlng = new google.maps.LatLng(bench.lat, bench.lng);

			var marker = new google.maps.Marker({
				position: myLatlng,
				title:"Hello World!"
			});
			markers.push(marker);
			marker.setMap(this.map);
		}.bind(this));
	}



});

module.exports = Gmap;
