var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');

document.addEventListener("DOMContentLoaded", function () {
  // old version, you didn't need to pass in hashHistory or browserHistory

  ReactDOM.render(
    <div id="content"><Index /></div>,
    document.getElementById('root')
  );
});
