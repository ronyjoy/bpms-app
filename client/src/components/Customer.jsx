import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {


    renderContent() {
        return "";
    }
    render() {
        return this.props.auth ? this.renderContent() : "";
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);