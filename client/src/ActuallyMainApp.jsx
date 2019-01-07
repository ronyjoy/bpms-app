import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login';
import App from './App';
import { changeLoggedIn } from './actions';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


 class ActuallyMainApp extends Component {
  componentDidMount() {
    const that = this;
    setTimeout(() => { that.props.changeLoggedIn(true) }, 300);
  }

  render() {
    if (this.props.loggedIn === null) {
      return loading;
    }

    return (
      <Switch>
        <Route path="/login/" component={Login} />
        <Route component={App} />
      </Switch>
    )
  }
}


export default connect(
  state => ({
    loggedIn: state.loggedIn,
  }), {
    changeLoggedIn,
  }
)(ActuallyMainApp)