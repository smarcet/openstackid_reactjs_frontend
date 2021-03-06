import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class DefaultRoute extends React.Component {

    render() {
        const { isLoggedUser, ...rest } = this.props;
        return (
            <Route {...rest} render={props => {
                if(!isLoggedUser)
                    return (<Redirect
                        exact
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />)
                return (<Redirect
                    exact
                    to={{
                        pathname: '/app',
                        state: { from: props.location }
                    }}
                />)
            }} />
        )
    }
}


export default DefaultRoute;