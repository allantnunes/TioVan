import React from 'react';
import Routes from './routes';
// import logo from '../src/public/img/Logo.png';
import '../src/pages/login/App.css';
import Navbar from '../src/pages/snippets/navbar';

function App() {

    return (
        <>
            <Navbar />

            <div className="containerLogin">
                <div className="contentLogin">
                    <div className="logo" />
                    <Routes />
                </div>
            </div>
        </>
    );
}

export default App;


