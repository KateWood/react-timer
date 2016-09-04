var React = require('react')
var ReactDOM = require('react-dom')
// Object destructuring - ES6 feature
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('Main')

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
)
