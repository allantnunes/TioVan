import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro/Cadastro';
import Portal from './pages/portal/portal';
import Home from './pages/home/Home';
import Rotas from './pages/rotas/index';
import Financeiro from './pages/financeiro/index';
import Despesas from './pages/financeiro/despesas/index';
import Mensalidades from './pages/financeiro/mensalidade/index';
import Clientes from './pages/clientes/index';
import User from './pages/user/index';
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        )}
    />
);

const Routes = () => (
    < BrowserRouter >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <PrivateRoute exact path="/motorista/portal" component={Portal} />
            <PrivateRoute exact path="/motorista/user" component={User} />
            <PrivateRoute exact path="/motorista/rotas" component={Rotas} />
            <PrivateRoute exact path="/motorista/financeiro" component={Financeiro} />
            <PrivateRoute exact path="/motorista/financeiro/despesas" component={Despesas} />
            <PrivateRoute exact path="/motorista/financeiro/mensalidades" component={Mensalidades} />
            <PrivateRoute exact path="/motorista/clientes" component={Clientes} />
            <Route exact path="*" component={() => <h1>Page Not Found</h1>} />
        </Switch>
    </BrowserRouter >
);

export default Routes;