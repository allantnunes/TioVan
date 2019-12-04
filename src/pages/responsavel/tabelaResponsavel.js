import React, { Component } from 'react';
import axios from 'axios';

import Responsavel from './CadastroResponsavel';
import CadDependente from '../dependente/CadastroDependente';
import Dependente from '../dependente/tabelaDependente';
const tb = {
    background: '#d2d2d2'
};

const tr = {
    margin: '4px'
}

//  <Tabela data={dados} />
export default class Tabela extends Component {
    state = {
        responsaveis: [],
        dependentes: [],
        responsavelAtual: "",
        nome: '',
        genero: '',
        ativo: '',
        responsavel: [],
        instituicao:''
    }
    componentDidMount() {
        //const url = `https://tiovan.herokuapp.com/motorista/getclientesbyid/${localStorage.getItem('user')}`;
        const url = `https://tiovan.herokuapp.com/responsavel`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ responsaveis: data })
            })
    }

    listarDependentes(r) {
        const url = `https://tiovan.herokuapp.com/responsavel/getdependentesbyid/${r.id}`
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.state.dependentes.length = 0
                this.state.responsavelAtual = r.nome
                this.setState({dependentes: data})
            })
    }

    definirResponsavelDoDependente(r){
        this.setState({
            responsavel: [`${r.id}`],
            responsavelAtual: r.nome
        })
    }

    changeHandler = e => {
        this.setState({ [e.target.id]: e.target.value });
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
                window.location.reload(true);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <div className="col-12">
                    <div className="table-responsive">
                    <table className="table table-bordered table-hover table-sm">
                        <thead className="text-center bordered">
                            <tr>
                                <th colSpan="5">Responsáveis </th>
                                <th><Responsavel /></th>
                            </tr>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Status</th>
                                <th scope="col">Dependentes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.responsaveis.map((r,i) => (
                                <>
                                    <tr key={r.id}>
                                        <td scope="row">{r.nome}&nbsp;</td>
                                        <td scope="row">{r.email}&nbsp;</td>
                                        <td scope="row">{r.celular}&nbsp;</td>
                                        {(r.endereco != null ? (<td scope="row">{r.endereco.logradouro}, Nº {r.endereco.numero}, {r.endereco.bairro} - {r.endereco.cidade}, {r.endereco.uf}.</td>)
                                            : (<td scope="row">nenhum endereço cadastrado.</td>))}
                                        <td scope="row" className="j">{r.ativo}</td>
                                        <td scope="row" className="d-flex justify-content-center p-2">
                                            <button type="button" className="btn btn-warning btn-sm" data-toggle="modal"
                                                    data-target="#modalKid" onClick={() => this.listarDependentes(r)}>Listar
                                            </button>
                                            <div className="modal fade text-left" id="modalKid" tabIndex="-1" role="dialog"
                                                 aria-labelledby="modalKidLabel" aria-hidden="true" style={{marginTop: '60px'}}>
                                                <div className="modal-dialog modal-lg" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="modalKidLabel">Dependentes de {this.state.responsavelAtual}</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body" style={{color: "#000"}}>
                                                            <div className="col-12">
                                                                <table className="table table-striped table-bordered table-hover table-sm">
                                                                    <tbody>
                                                                    {this.state.dependentes != [] ? this.state.dependentes.map(d => (

                                                                        <tr key={d.id} id={d.responsavel}>
                                                                            <td scope="row">{d.nome}&nbsp;</td>
                                                                            <td scope="row">{d.ativo}</td>
                                                                            <td scope="row">{d.instituicao}</td>
                                                                        </tr>

                                                                    )) : console.log("Sem dependentes")}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            &nbsp;

                                            <button type="button" className="btn btn-success btn-sm" data-toggle="modal"
                                                    data-target="#modalDependente" onClick={() => this.definirResponsavelDoDependente(r)}>Novo
                                            </button>

                                            <div className="modal fade text-left" id="modalDependente" tabIndex="-1"
                                                 role="dialog" aria-labelledby="modalDependenteLabel" aria-hidden="true"
                                                 style={{marginTop: '60px'}}>
                                                <div className="modal-dialog modal-lg" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title"
                                                                id="modalDependenteLabel">Cadastrar Dependente para {this.state.responsavelAtual}</h5>
                                                            <button type="button" className="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body" style={{color: "#000"}}>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <form onSubmit={this.submitHandler}>
                                                                        <div className="container-fluid">
                                                                            <div className="form-row">
                                                                                <div className="col-4">
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            htmlFor="nome">Nome</label>
                                                                                        <input type="text"
                                                                                               className="form-control"
                                                                                               id="nome"
                                                                                               onChange={this.changeHandler}
                                                                                               placeholder="Fulano da Silva"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-4">
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            htmlFor="genero">Gênero</label>
                                                                                        <select className="form-control"
                                                                                                id="genero"
                                                                                                onChange={this.changeHandler}>
                                                                                            <option value="0" selected
                                                                                                    disabled>Selecionar
                                                                                            </option>
                                                                                            <option
                                                                                                value="MASCULINO">Masculino
                                                                                            </option>
                                                                                            <option
                                                                                                value="FEMININO">Feminino
                                                                                            </option>
                                                                                            <option
                                                                                                value="NAO_BINARIO">Não-Binário
                                                                                            </option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-4">
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            htmlFor="ativo">Ativo?</label>
                                                                                        <input type="text"
                                                                                               className="form-control"
                                                                                               id="ativo"
                                                                                               onChange={this.changeHandler}
                                                                                               placeholder="Ativo / Inativo"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <div className="col-10 offset-1">
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            htmlFor="instituicao">Instituição</label>
                                                                                        <input type="text"
                                                                                               className="form-control"
                                                                                               id="instituicao"
                                                                                               onChange={this.changeHandler}
                                                                                               placeholder="Bandtec Digital School"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <hr/>
                                                                        <div className="row">
                                                                            <div className="mx-auto p-2">
                                                                                <button type="button"
                                                                                        className="btn btn-secondary"
                                                                                        data-dismiss="modal">Fechar
                                                                                </button>
                                                                                &nbsp;&nbsp;
                                                                                <button type="submit"
                                                                                        className="btn btn-primary"
                                                                                        id="btnCadastrar">Cadastrar
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            </td>
                                    </tr>
                                </>
                            ))}

                        </tbody>
                    </table>
                    </div>
                </div>
            </>
        );
    }
}
