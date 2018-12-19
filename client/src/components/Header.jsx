import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {

    renderSearchBar() {
        return <div className="header-search-wrapper hide-on-med-and-down">
            <i className="material-icons">search</i>
            <input type="text" name="Search" className="header-search-input z-depth-2" placeholder="Search Customer" />
        </div>;

    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [(<ul className="right hide-on-med-and-down"><li>
                    <a href="/auth/google" className="waves-effect waves-block waves-light profile-button" data-activates="profile-dropdown">
                        <span > Login
                    <i></i>
                        </span>
                    </a>
                </li>
                    <li>
                        <a href="#" data-activates="chat-out" className="waves-effect waves-block waves-light chat-collapse">
                            <i className="material-icons">format_indent_increase</i>
                        </a>
                    </li>
                </ul>)];
            default:
                return [
                    this.renderSearchBar(),
                    <ul className="right hide-on-med-and-down">


                        <li>
                            <a href="javascript:void(0);" className="waves-effect waves-block waves-light notification-button" data-activates="notifications-dropdown">
                                <i className="material-icons">notifications_none
          <small className="notification-badge pink accent-2">5</small>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="waves-effect waves-block waves-light profile-button" data-activates="profile-dropdown">
                                {this.props.auth.name}
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="waves-effect waves-block waves-light profile-button" data-activates="profile-dropdown">
                                <span className="avatar-status avatar-online">
                                    <img src={require('../assets/images/avatar/avatar-7.png')} alt=" avatar" />
                                    <i></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/api/logout" className="waves-effect waves-block waves-light profile-button" data-activates="profile-dropdown">
                                <span> Logout
                                <i></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-activates="chat-out" className="waves-effect waves-block waves-light chat-collapse">
                                <i className="material-icons">format_indent_increase</i>
                            </a>
                        </li>
                    </ul>
                ];
        }
    }
    render() {
        return (
            <header id="header" className="page-topbar">
                <div className="navbar-fixed">
                    <nav className="navbar-color gradient-45deg-light-blue-cyan">
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li>
                                    <h1 className="logo-wrapper">
                                        <Link to={this.props.auth ? "/dashboard" : "/"} className="brand-logo darken-1">
                                            <span className="logo-text hide-on-med-and-down">BPMS</span>
                                        </Link>
                                    </h1>
                                </li>
                            </ul>

                            {this.renderContent()}

                        </div>
                    </nav>
                </div>
            </header>

        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);