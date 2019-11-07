import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <Link className="navbar-brand font-weight-bold" to="#"><strong><span className="text-dark">Tio</span>Van</strong></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <div className="ml-auto mr-2">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-1">
                            <Link to="/motorista/portal" className="nav-link"><span className="text-light">Início</span></Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link to="/motorista/cadastro" className="nav-link"><span className="text-light">Cadastre-se</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/">
                                <button className="btn btn-secondary rounded" type="submit">Entrar</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}