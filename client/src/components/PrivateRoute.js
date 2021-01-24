import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '../contexts/AuthContext';

const PrivateRoute = ( { component: Component, ...rest  }) => {

    const { currentUser } = useContext(Auth);

    return (
        <Route
            { ...rest }
            render={ props => { 
                return currentUser ? <Component { ...rest } /> : <Redirect to="/" /> 
            }}
        >
            
        </Route>
    )
}

export default PrivateRoute
