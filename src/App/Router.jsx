import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from 'App/App';
import Home from 'Home/Container';
import Login from 'Login/Container';

export default class AppRouter extends Component {
  render() {
    // <Router history={this.props.history} children={routes(store)}>
    // components being routed to should be in store, not passed as prop
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>

          <IndexRoute component={Home}/>
          <Route name="login" path="login" component={Login}/>

        </Route>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  history: PropTypes.object.isRequired
};
