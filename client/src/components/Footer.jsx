import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {


    renderContent() {

    }
    render() {
        return (
            <footer className="page-footer gradient-45deg-light-blue-cyan">
                <div className="footer-copyright">
                    <div className="container">
                        <span>Copyright ©
                  <script type="text/javascript">
                                document.write(new Date().getFullYear());
                  </script> <a className="grey-text text-lighten-2" href="http://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank">PIXINVENT</a> All rights reserved.</span>
                        <span className="right hide-on-small-only"> Design and Developed by <a className="grey-text text-lighten-2" href="https://pixinvent.com/">PIXINVENT</a></span>
                    </div>
                </div>
            </footer>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);