import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro/Cadastro';
import Portal from './pages/portal/portal';
import Home from './pages/home/Home';
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
        )}
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/motorista/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route path="/motorista/cadastro" component={Cadastro} />
            <Route path="/motorista/portal" component={Portal} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;