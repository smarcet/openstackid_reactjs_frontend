import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrimaryLayout from "./layouts/primary-layout"
import AuthorizedRoute from './authorized-route'
import AuthorizationCallbackRoute from "./authorization-callback-route"
import AuthButton from './auth-button'
import DefaultRoute from './default-route'
import { connect } from 'react-redux'
import { onUserAuth, doLogin, doLogout } from './actions'
import { BrowserRouter } from 'react-router-dom'

class App extends React.PureComponent {
    render() {
        let { isLoggedUser, onUserAuth, doLogout} = this.props;
        return (
            <BrowserRouter>
                <div>
                    <AuthButton isLoggedUser={isLoggedUser} doLogin={doLogin} doLogout={doLogout}/>
                    <Switch>
                        <AuthorizedRoute isLoggedUser={isLoggedUser} path="/app" component={PrimaryLayout} />
                        <AuthorizationCallbackRoute onUserAuth={onUserAuth} path='/auth/callback'/>
                        <Route path="/404" render={props => (<p>404 - Not Found</p>)}/>
                        <DefaultRoute isLoggedUser={isLoggedUser} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ loggedUserState }) => ({
    isLoggedUser: loggedUserState.isLoggedUser
})

export default connect(mapStateToProps, {
    onUserAuth,
    doLogin,
    doLogout
})(App)