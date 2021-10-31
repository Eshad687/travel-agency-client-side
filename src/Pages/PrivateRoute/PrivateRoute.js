import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {

    // SETTING UP PRIVAE ROUTES
    // solving page reload getting back to login page
    const { user, isLoading } = useAuth();
    // console.log(isLoading)
    if (isLoading) {

        return <Spinner animation="border" variant="danger" />

    }

    return (
        <Route

            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;