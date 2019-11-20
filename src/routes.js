import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro/Cadastro';
import Portal from './pages/portal/portal';
import Home from './pages/home/Home';
// import { isAuthenticated } from "./services/auth";
import Financeiro from './pages/financeiro/index';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props => (
//             isAuthenticated() ? (
//                 <Component {...props} />
//             ) : (
//                     <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//                 )
//         )}
//     />
// );

const Routes = () => (
    < BrowserRouter >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/motorista/portal" component={Portal} />
            <Route path="/motorista/financeiro" component={Financeiro} />
            <Route path="*" component={() => <h1>Page Not Found</h1>} />
        </Switch>
    </BrowserRouter >
);

export default Routes;