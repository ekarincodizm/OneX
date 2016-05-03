var React         = require('react');
var Router        = require('react-router');
var T             = require('react-translate-component');
var tr            = require('counterpart');

var system        = require('ss-system');

var systemActions = system.systemActions; //require('../../system/actions');

// var bookingActions  = require('./actions');
// var bookingStore    = require('./store');

var Home = {};

tr.registerTranslations('en', require('./lang/en.js'));
tr.registerTranslations('th', require('./lang/th.js'));


Home.Index = React.createClass({
  componentDidMount: function() {
    //systemActions.setPageHeader("Load Fare");
  },

  render: function() {
    return this.props.children
  }
});

//LoadFare.Screen = require('./loadfare-screen.jsx');


// LoadFare.Routes = (
//   <Route name="transport.loadfare" path="loadfare" handler={LoadFare.Index}>
//     <Router.DefaultRoute name="transport.loadfare.screen" path="loadfare-screen" handler={LoadFare.Screen}/>
//   </Route>
// );

module.exports = Home;
