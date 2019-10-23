import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <div>
                 <header role="banner">
                    <nav className="navbar navbar-expand-lg  bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand " to="index.html">TioVan</a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05"
                                aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarsExample05">
                                <ul className="navbar-nav pl-md-5 ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="index.html">Inicial</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="contact.html">Contato</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="../../pages/login/index.js">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="../../pages/cadastro/Cadastro.js">Cadastrar </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header> 

                <div className="slider-item overlay" data-stellar-background-ratio="0.5"
                    /*style="background-image: url('../../public/images/fundoback.jpeg')"*/>
                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center">
                            <div className="col-lg-9 text-center col-sm-12 element-animate">
                                <h1 className="mb-4">TioVan</h1>
                                <div className="btn-play-wrap mx-auto">
                                    <p className="mb-4"><a to="https://www.youtube.com/watch?v=kB-WtZJcqnE&feature=youtu.be" data-fancybox data-ratio="2"
                                        className="btn-play"><span className="ion ion-ios-play"></span></a></p>
                                </div>
                                <span>Assista ao video</span>

                            </div>
                        </div>
                    </div>
                </div> 



                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mr-auto mb-5">
                                <span className="d-block text-uppercase text-secondary">Quem somos?</span>
                                <span className="divider my-4"></span>
                                <h2 className="mb-4 section-title">Somos uma equipe que visa o mercado de <strong>Transporte escolar</strong></h2>
                                <p>Focada na integridade,conforto e segurança para os motoristas, o "TioVan" é o que chamamos de mais novo em solução
                                    IOT e inovação para entregarmos ferramentas de modulos no controle de rotas, gerenciamento de presença de passageiros e automatização
                                nos trajetos ao seu destino!</p>
                                <p className="mb-5">Tenha controle sobre tudo!.</p>
                                <p><a to="../frontend/html cadastro tiovan/cadastroMotorista.html" className="btn btn-outline-black">Saiba mais</a></p>
                            </div>

                            <div className="col-lg-6">
                                <figure className="img-dotted-bg">
                                    <img src="../../public/images/quadro4.jpg" alt="Image" className="img-fluid" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section portfolio-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <h2 className="mb-4 section-title">Portfolio</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <a className="work-thumb">
                                    <div className="work-text">
                                        <h2>ROTAS</h2>
                                        <p>Rapido e Pratico, com cada região cadastrada dos passageiros, nós automatizaremos para que nossa aplicação
                                            atenda com o melhor PERCURSO possivel para cada passageiros,facilitando você Motorista para uma melhor trajetoria  </p>
                                    </div>
                                    <img src="../../public/images/quadro5.jpg" alt="Image" className="img-fluid" />
                                </a>
                                <a className="work-thumb">
                                    <div className="work-text">
                                        <h2>Passageiros</h2>
                                        <p>Na palma da mão! Gerencie a entrada e saida de passageiros, seu local de saida e destino final, antecipe se ela
                                                ira ao encontro de sua Van, mapeie tudo com nossa aplicação </p>
                                    </div>
                                    <img src="../../public/images/quadro3.jpg" alt="Image" className="img-fluid" />
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <a className="work-thumb">
                                    <div className="work-text">
                                        <h2>Controle</h2>
                                        <p>Tenha acesso a tudo que esta acontecendo com sua Van, rotas e gerenciamento de passageiros</p>
                                    </div>
                                    <img src="../../public/images/fundo2.jpg" alt="Image" className="img-fluid" />
                                </a>
                                <a className="work-thumb">
                                    <div className="work-text">
                                        <h2>Problemas</h2>
                                        <p>Problemas com atraso? Insegurança com pagamentos? Má gestão com os passageiros? Muitos desses Problemas existem, e pensando
                                                nisso desenvolvimentos nossa solução de contorno para diversos problemas e controle de caixa </p>
                                    </div>
                                    <img src="../../public/images/quadro1.jpg" alt="Image" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mr-auto mb-3">
                                <span className="d-block text-uppercase text-secondary">Serviços</span>
                                <span className="divider my-4"></span>
                                <h2 className="mb-4 section-title">A<strong> inovação</strong> perto de você!</h2>
                                <p>Oferecendo módulos para gestão, gerenciamento de presenças e rotas do motorista,O TioVan oferece uma gestão prática para
                                    gerenciar os passageiros cadastradas no sistema, assim podendo ter fácil acesso a quantidade de passageiros que
                                    estão sendo transportadas e sua região registrada.

                                </p>
                                <p className="mb-5">O Projeto TioVan vem com o intuito de suprir as necessidades apresentadas.</p>

                            </div>
                            <div className="col-lg-6">
                                <div className="row mt-5">
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <div className="service">
                                            <span className="icon icon-shield mb-4 d-block"></span>
                                            <h3>Inovação</h3>
                                            <p>Solução web/mobile com módulos que revolucionarão o mercado.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <div className="service">
                                            <span className="icon icon-screen-desktop mb-4 d-block"></span>
                                            <h3>Gestão</h3>
                                            <p>Ferramenta para gestão de controle de quantidade e presença de passageiros, gerenciamento de rotas e controle de caixa. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <div className="service">
                                            <span className="icon icon-screen-smartphone mb-4 d-block"></span>
                                            <h3>Percurso</h3>
                                            <p>O aplicativo fornecerá as rotas mais acessíveis para o motorista, de forma dinâmica. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <div className="service">
                                            <span className="icon icon-rocket mb-4 d-block"></span>
                                            <h3>Tempo</h3>
                                            <p>Otimização do dia do motorista com a administração de presenças das crianças via app </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="loader" className="show fullscreen">
                    <svg className="circular" width="48px" height="48px">
                        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
                        <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214" />
                    </svg>
                </div>
            </div>
        )
    }
}