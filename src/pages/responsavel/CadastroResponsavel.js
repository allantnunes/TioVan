import React, { Component } from 'react';
import axios from 'axios';
import AppAppBar from '../home/modules/views/AppAppBar';


export default class CadastroResponsavel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            genero: '',
            ativo: '',
            cpf: '',
            celular: '',
            email: '',
            motorista:'5ddde3fb5f1511000437a31e'
        }
    }
    changeHandler = e => {
        console.log(`${[e.target.id]} : ${e.target.value}`)
        this.setState({ [e.target.id]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://tiovan.herokuapp.com/responsavel/cadastro', this.state)
            .then(response => {
                console.log(response);
                window.location.reload(true);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { nome, genero, ativo, cpf, celular, email } = this.state
        return (
            <>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalResponsavel">Cadastrar Responsavel</button>
                
                <div className="modal fade" id="modalResponsavel" tabIndex="-1" role="dialog" aria-labelledby="modalResponsavelLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalResponsavelLabel">Cadastrar Responsavel</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 m-auto">
                                        <form onSubmit={this.submitHandler}>
                                      <div className="container">
                                      <div className="row">
                                                <div className="mx-auto">
                                                    <h1>Cadastrar Responsavel</h1>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-5 offset-1">
                                                    <div className="form-group">
                                                        <label htmlFor="nome">Nome</label>
                                                        <input type="text" className="form-control" id="nome" onChange={this.changeHandler} placeholder="Fulano da Silva" />
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <div className="form-group">
                                                        <label htmlFor="ativo">Ativo?</label>
                                                        <input type="text" className="form-control" id="ativo" onChange={this.changeHandler} placeholder="Ativo / Inativo" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="form-row">
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
                                            <div className="form-row">
                                                <div className="col-5 offset-1">
                                                    <div className="form-group">
                                                        <label htmlFor="cpf">CPF</label>
                                                        <input type="text" className="form-control" id="cpf" onChange={this.changeHandler} placeholder="507.245.798-12" />
                                                    </div>
                                                </div>
                                                <div className="col-5">
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
                                      </div>
                                                <hr />
                                            <div className="row">
                                                <div className="mx-auto p-2">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                                    <button type="submit" className="btn btn-primary" id="btnCadastrar">Cadastrar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}