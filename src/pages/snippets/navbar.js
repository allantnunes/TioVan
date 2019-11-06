import React from 'react';
import MetaTags from 'react-meta-tags';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <a className="navbar-brand font-weight-bold" href="#"><strong><span className="text-dark">Tio</span>Van</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <div className="ml-auto mr-2">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-1">
                            <a href="/motorista/portal" className="nav-link"><span className="text-light">Início</span></a>
                        </li>
                        <li className="nav-item mr-2">
                            <a href="/motorista/cadastro" className="nav-link"><span className="text-light">Cadastre-se</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="/motorista/login">
                                <button className="btn btn-secondary rounded" type="submit">Entrar</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}