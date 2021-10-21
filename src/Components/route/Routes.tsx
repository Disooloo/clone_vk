import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Layout from '../layout/Layout'Layout
// import Auth from '../pages/auth/Auth'
// import { useAuth } from '../providers/useAuth'
import { routes } from './list'
import Layouts from "../layouts/Layouts";

const Routes: FC = () => {
    return (
        <Router>
            <Switch>
                {routes.map(route => {
                    return (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            key={`route ${route.path}`}
                        >
                            <Layouts>
                                {<route.component />}
                            </Layouts>
                        </Route>
                    )
                })}
            </Switch>
        </Router>
    )
}

export default Routes
