import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth === false ? (
                <Redirect to="/login" />
            ) : (
                    <Component {...props} />
                )
        }
    />
);

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(PrivateRoute);
