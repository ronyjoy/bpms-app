import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {


    renderContent() {
        return (
            <aside id="left-sidebar-nav">
                <ul id="slide-out" className="side-nav fixed leftside-navigation">
                    <li className="user-details cyan darken-2">
                        <div className="row">
                            <div className="col col s4 m4 l4">
                                <img src="images/avatar/avatar-7.png" alt="" className="circle responsive-img valign profile-image cyan" />
                            </div>
                            <div className="col col s8 m8 l8">
                                <ul id="profile-dropdown-nav" className="dropdown-content">
                                    <li>
                                        <a href="#" className="grey-text text-darken-1">
                                            <i className="material-icons">face</i> Profile</a>
                                    </li>
                                    <li>
                                        <a href="#" className="grey-text text-darken-1">
                                            <i className="material-icons">settings</i> Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="grey-text text-darken-1">
                                            <i className="material-icons">live_help</i> Help</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#" className="grey-text text-darken-1">
                                            <i className="material-icons">lock_outline</i> Lock</a>
                                    </li>
                                    <li>
                                        <a href="#" className="grey-text text-darken-1">
                                            <i className="material-icons">keyboard_tab</i> Logout</a>
                                    </li>
                                </ul>
                                <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown-nav">John Doe<i className="mdi-navigation-arrow-drop-down right"></i></a>
                                <p className="user-roal">Administrator</p>
                            </div>
                        </div>
                    </li>
                    <li className="no-padding">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li className="bold">
                                <a href="index.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">pie_chart_outlined</i>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="cards-basic.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">cast</i>
                                    <span className="nav-text">Cards</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="ui-basic-buttons.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">insert_link</i>
                                    <span className="nav-text">Buttons</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="form-layouts.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">format_color_text</i>
                                    <span className="nav-text">Forms</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="css-typography.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">format_size</i>
                                    <span className="nav-text">Typography</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="css-color.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">invert_colors</i>
                                    <span className="nav-text">Color</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="table-basic.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">border_all</i>
                                    <span className="nav-text">Table</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="ui-icons.html" className="waves-effect waves-cyan">
                                    <i className="material-icons">lightbulb_outline</i>
                                    <span className="nav-text">Icons</span>
                                </a>
                            </li>
                            <li>
                                <a className="btn waves-effect waves-light gradient-45deg-red-pink" href="https://pixinvent.com/materialize-material-design-admin-template/landing/" target="_blank">
                                    <i className="material-icons white-text">file_upload</i>Upgrade to Pro!
                  </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only">
                    <i className="material-icons">menu</i>
                </a>
            </aside>
        );
    }
    render() {
        return this.props.auth ? this.renderContent() : "";
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);