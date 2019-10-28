import React from 'react';
// import Login from '../login';
import { Link } from 'react-router-dom'
import Routes from '../../routes';
// import Routes from '../../routes';


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <a className="navbar-brand font-weight-bold" href="#"><span className="text-dark">Tio</span>Van</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <div className="ml-auto mr-2">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-1">
                            <a href="/home" className="nav-link"><span className="text-light">Início</span></a>
                        </li>
                        <li className="nav-item mr-2">
                            <a href="/cadastro" className="nav-link"><span className="text-light">Cadastre-se</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="/">
                                <button className="btn btn-secondary rounded" type="submit">Entrar</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}