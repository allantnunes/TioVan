import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
//import Cadastro from './pages/cadastro/';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render ={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/motorista/cadastro_motorista" component={Cadastro}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;