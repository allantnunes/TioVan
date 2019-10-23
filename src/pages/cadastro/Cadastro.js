import React, { Component } from 'react';
import axios from 'axios';

export default class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome:'',
            apelido:'',
            email:'',
            celular:'',
            cpf:'',
            genero:''

        }
    }
    changeHandler = e=>{
        this.setState({[e.target.id]:e.target.value});
    }
    submitHandler = e=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/motorista/cadastrar',this.state)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        const{nome,apelido,email,numCelular,cpf,genero} = this.state
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                    <a className="navbar-brand font-weight-bold" href="#"><span className="text-dark">Tio</span>Van</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                        aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <div className="ml-auto mr-2">
                            <ul className="navbar-nav">
                                <li className="nav-item mr-1">
                                    <a href="#" className="nav-link"><span className="text-light">Início</span></a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-secondary rounded" type="submit">Entrar</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="overlay-div"></div>

                <div className="container">
                    <div className="row ">
                        <div className="col-10 m-auto">
                            <div className="bg-warning rounded my-4 p-4">
                                <form onSubmit={this.submitHandler}>
                                    <div className="row">
                                        <div className="mx-auto">
                                            <h1>REGISTRE<span className="text-light">-</span>SE</h1>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-5 offset-1">
                                            <div className="form-group">
                                                <label htmlFor="nome">Nome</label>
                                                <input type="text" className="form-control" id="nome" onChange={this.changeHandler} placeholder="Fulano da Silva" />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label htmlFor="apelido">Apelido</label>
                                                <input type="text" className="form-control" id="apelido"  onChange={this.changeHandler} placeholder="Tio Fulano" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-5 offset-1">
                                            <div className="form-group">
                                                <label htmlFor="email">E-mail</label>
                                                <input type="email" className="form-control" id="email" onChange={this.changeHandler} placeholder="email@exemplo.com" />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label htmlFor="celular">Celular</label>
                                                <input type="text" className="form-control" id="celular" onChange={this.changeHandler} placeholder="(11) 4002-8922" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-5 offset-1">
                                            <div className="form-group">
                                                <label htmlFor="cpf">CPF</label>
                                                <input type="text" className="form-control" id="cpf" onChange={this.changeHandler} placeholder="507.245.798-12" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label htmlFor="genero">Gênero</label>
                                                <select className="form-control" id="genero" onChange={this.changeHandler}>
                                                    <option value="0" selected disabled>Selecionar</option>
                                                    <option value="MASCULINO">Masculino</option>
                                                    <option value="FEMININO">Feminino</option>
                                                    <option value="NAO_BINARIO">Não-Binário</option>
                                                    <option value="OUTRO">Outro</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mx-auto">
                                            <button type="submit" className="btn" id="btnCadastrar">Cadastrar</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}