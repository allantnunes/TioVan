import React from 'react';
import { BrowserRouter, Route, Switch, /*Redirect*/ } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro/Cadastro';
import Portal from './pages/portal/portal';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render ={props => (
//         isAuthenticated() ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//         )
//     )} />
// )

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/motorista/login" component={Login} />
            <Route path="/motorista/cadastro" component={Cadastro} />
            <Route path="/motorista/portal" component={Portal}/>
            {/* <PrivateRoute path="/motorista/dashboard" component={Dashboard}/> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;