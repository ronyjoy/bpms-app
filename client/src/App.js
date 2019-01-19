import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
import "./App.scss";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import * as actions from "./actions";
import Alert from "react-s-alert";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = Loadable({
  loader: () => import("./containers/DefaultLayout"),
  loading
});
// Containers
const AddCustomer = Loadable({
  loader: () => import("./views/Customer/AddCustomer"),
  loading
});
const ListCustomer = Loadable({
  loader: () => import("./views/Customer/ListCustomer"),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import("./Login"),
  loading
});

const Register = Loadable({
  loader: () => import("./views/Pages/Register"),
  loading
});

const Page404 = Loadable({
  loader: () => import("./views/Pages/Page404"),
  loading
});

const Page500 = Loadable({
  loader: () => import("./views/Pages/Page500"),
  loading
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login/" />
            <Route exact path="/login" name="Login Page" component={Login} />
            <PrivateRoute path="/dashboard/" component={DefaultLayout} />
            <PrivateRoute
              path="/dashboard/addcustomer/"
              component={AddCustomer}
            />
            <PrivateRoute
              path="/dashboard/customers/"
              component={ListCustomer}
            />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
          </Switch>
        </BrowserRouter>
        <div>
          <span>{this.props.children}</span>
          <Alert stack={{ limit: 3 }} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
