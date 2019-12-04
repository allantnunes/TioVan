import React, { Component } from 'react';
import axios from 'axios';


export default class CadastroDependente extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            genero: '',
            ativo: '',
            responsavel: [`${this.props.responsavel.id}`],
            instituicao:''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    submitHandler = e => {
        e.preventDefault();
        var jso = `
        {
            "nome":"${this.state.nome}",
            "genero":"${this.state.genero}",
            "ativo":"${this.state.ativo}",
            "responsavel":["${this.props.responsavel}"],
            "instituicao":"${this.state.instituicao}"
            }
        `;
         axios.post('https://tiovan.herokuapp.com/dependente/cadastro', this.state)
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
                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modalDependente">Novo</button>

                <div className="modal fade text-left" id="modalDependente" tabIndex="-1" role="dialog" aria-labelledby="modalDependenteLabel" aria-hidden="true" style={{ marginTop: '60px' }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalDependenteLabel">Cadastrar Dependente para {this.props.responsavel.nome}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ color: "#000" }}>
                                <div className="row">
                                    <div className="col-12">
                                        <form onSubmit={this.submitHandler}>
                                            <div className="container-fluid">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="nome">Nome</label>
                                                            <input type="text" className="form-control" id="nome" onChange={this.changeHandler} placeholder="Fulano da Silva" />
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="genero">Gênero</label>
                                                            <select className="form-control" id="genero" onChange={this.changeHandler}>
                                                                <option value="0" selected disabled>Selecionar</option>
                                                                <option value="MASCULINO">Masculino</option>
                                                                <option value="FEMININO">Feminino</option>
                                                                <option value="NAO_BINARIO">Não-Binário</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="ativo">Ativo?</label>
                                                            <input type="text" className="form-control" id="ativo" onChange={this.changeHandler} placeholder="Ativo / Inativo" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-10 offset-1">                                           
                                                        <div className="form-group">
                                                            <label for="instituicao">Instituição</label>
                                                            <input type="text" className="form-control" id="instituicao" onChange={this.changeHandler} placeholder="Bandtec Digital School" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="mx-auto p-2">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>&nbsp;&nbsp;
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