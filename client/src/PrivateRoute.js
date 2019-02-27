import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, loading,  ...rest }) => (
    loading === true ? "":
    <Route
        {...rest}
        render={props =>
            auth.email === undefined ? (
                <Redirect to="/login" />
            ) : (
                    <Component {...props} />
                )
        }
    />
    
);

const mapStateToProps = state => ({ 
    loading: state.auth.loading,
    auth:state.auth.data,
    error:state.auth.error
});
export default connect(mapStateToProps)(PrivateRoute);
