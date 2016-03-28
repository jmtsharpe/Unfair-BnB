var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Search = require('./components/Search');
var App = require('./components/App');
var BenchForm = require('./components/BenchForm');


var routes = (
  <Route path="/" component={App}>
		<IndexRoute component={Search}/>
		<Route path="benches/new" component={BenchForm}/>
  </Route>
);

$( document ).ready(function() {
	var root = document.getElementById('content');
	ReactDOM.render(<Router>{routes}</Router>, root);
});
