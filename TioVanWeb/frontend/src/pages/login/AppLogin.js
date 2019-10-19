import React from 'react';

import './App.css';

import logo from './img/LogoPortal.PNG';

import Routes from './routes';



function AppLogin() {

    return (
        <div className="container">
            <img src={logo} />
            <div className="content">
                <Routes />
            </div>
        </div>
    );
}

export default AppLogin;