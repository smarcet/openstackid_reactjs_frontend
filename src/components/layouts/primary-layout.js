import React from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import ScheduleBuilderPage from '../pages/schedule-builder-page';

const PrimaryLayout = ({ match }) => (
    <div className="primary-layout">
        <ul>
            <li>
                <Link to="/app/schedule">Schedule Builder</Link>
             </li>
         </ul>
        <Switch>
            <Route exact path="/app" render={props => (<h1></h1>)}/>
            <Route exact path="/app/schedule" component={ScheduleBuilderPage}/>
            <Route render={props => (<Redirect to="/app"/>)}/>
        </Switch>
    </div>
)

export default PrimaryLayout;