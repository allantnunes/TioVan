import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro/Cadastro';
import portal from './pages/portal/portal';


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
            <Route exact path="/" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/portal" component={portal}/>
            {/* <PrivateRoute path="/motorista/dashboard" component={Dashboard}/> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;