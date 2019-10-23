import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro/Cadastro';


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
            <Route path="/motorista/cadastro" component={Cadastro}/>
            {/* <PrivateRoute path="/motorista/dashboard" component={Dashboard}/> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;