import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from "./Header"
import Dashboard from './Dashboard'
import Footer from './Footer'
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">

                <BrowserRouter>
                    <div>
                        <Header></Header>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/dashboard" component={Dashboard} />

                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default connect(null, actions)(App);