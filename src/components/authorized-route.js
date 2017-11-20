import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

class AuthorizedRoute extends React.Component {

    componentWillMount() {
    }

    render() {
        const { component: Component, isLoggedUser, ...rest } = this.props;
        return (
            <Route {...rest} render={props => {
                return isLoggedUser
                    ? <Component {...props} />
                    : <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                      />
            }} />
        )
    }
}

export default AuthorizedRoute;


