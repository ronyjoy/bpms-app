import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {




    renderContent() {
        return (
            <aside id="left-sidebar-nav">
                <ul id="slide-out" className="side-nav fixed leftside-navigation">
                    <li className="user-details cyan darken-2">
                        <div className="row">
                            <div className="col col s4 m4 l4">
                                <img src={this.props.auth.image} alt="" className="circle responsive-img valign profile-image cyan" />
                            </div>
                            <div className="col col s8 m8 l8">

                                <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown-nav">{this.props.auth.name}<i className="mdi-navigation-arrow-drop-down right"></i></a>
                                <p className="user-roal">Administrator</p>
                            </div>
                        </div>
                    </li>
                    <li className="no-padding">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li className="bold">
                                <a href="/customer" className="waves-effect waves-cyan">
                                    <i className="material-icons">tag_faces</i>
                                    <span className="nav-text">Customer Management</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="/ems" className="waves-effect waves-cyan">
                                    <i className="material-icons">phone</i>
                                    <span className="nav-text">Enquiry Management</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="/qm" className="waves-effect waves-cyan">
                                    <i className="material-icons">monetization_on</i>
                                    <span className="nav-text">Quote Management</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="/pm" className="waves-effect waves-cyan">
                                    <i className="material-icons">directions_run</i>
                                    <span className="nav-text">Project Management</span>
                                </a>
                            </li>
                            <li className="bold">
                                <a href="/api/logout" className="waves-effect waves-cyan">
                                    <i className="material-icons">clear</i>
                                    <span className="nav-text">Logout</span>
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