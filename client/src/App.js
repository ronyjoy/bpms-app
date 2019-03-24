import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { message,Spin } from "antd";
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
import "./App.scss";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import { fetchUser } from "./actions/authActions";
import {REMOVE_ERROR,REMOVE_SUCCESS} from './actions/types.js';
const loading = () => (
  <Spin size="large" />
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
const AddEnquiry = Loadable({
  loader: () => import("./views/Enquiry/AddEnquiry"),
  loading
});
const ListEnquiry = Loadable({
  loader: () => import("./views/Enquiry/ListEnquiry"),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import("./Login"),
  loading
});

const Page404 = Loadable({
  loader: () => import("./views/Pages/Page404"),
  loading
});

const Page401 = Loadable({
  loader: () => import("./views/Pages/Page401"),
  loading
});

const Page500 = Loadable({
  loader: () => import("./views/Pages/Page500"),
  loading
});
// Hook up App to be a container (react-redux)

class App extends Component {
  componentDidUpdate() {
    console.log("errors" + this.props.error);
    if (this.props.error !== null) {
      message.error(this.props.error.message);
      this.props.dispatch({type: REMOVE_ERROR});
    }
    if (this.props.success && this.props.success !== null) {
      message.success(this.props.success.message);
      this.props.dispatch({type: REMOVE_SUCCESS});
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login/" />
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route path="/dashboard/" component={DefaultLayout} />
            <Route path="/dashboard/addcustomer/" component={AddCustomer} />
            <Route path="/dashboard/customers/" component={ListCustomer} />
            <Route path="/dashboard/addenquiry/" component={AddEnquiry} />
            <Route path="/dashboard/enquiries/" component={ListEnquiry} />
            <Route exact path="/401" name="Page 401" component={Page401} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(state => ({
  error: state.error_message.error,
  success: state.success_message.success
}))(App);
