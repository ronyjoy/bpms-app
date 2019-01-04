import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from "./Header"
import LeftPanel from './LeftPanel';
import Customer from './Customer';
import Footer from './Footer'
import Enquiry from './Enquiry';
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Route path="/" component={LeftPanel} />
                    <Route exact path="/customer" component={Customer} />
                    <Route exact path="/enquiry" component={Enquiry} />
                </div>
            </BrowserRouter>

        );
    };
}

export default connect(null, actions)(App);