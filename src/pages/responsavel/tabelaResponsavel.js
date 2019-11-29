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
        responsaveis: []
    }
    componentDidMount() {
        //const url = `https://tiovan.herokuapp.com/motorista/getclientesbyid/${localStorage.getItem('user')}`;
        const url = `https://tiovan.herokuapp.com/responsavel`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ responsaveis: data })
                console.log("local storage: " + localStorage.getItem('user'));
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
                            {this.state.responsaveis.map(r => (
                                <>
                                    <tr key={r.id}>
                                        <td scope="row">{r.nome}&nbsp;</td>
                                        <td scope="row">{r.email}&nbsp;</td>
                                        <td scope="row">{r.celular}&nbsp;</td>
                                        {(r.endereco != null ? (<td scope="row">{r.endereco.logradouro}, Nº {r.endereco.numero}, {r.endereco.bairro} - {r.endereco.cidade}, {r.endereco.uf}.</td>)
                                            : (<td scope="row">nenhum endereço cadastrado.</td>))}
                                        <td scope="row" className="j">{r.ativo}</td>
                                        <td scope="row" className="d-flex justify-content-center">
                                            <Dependente res={r}/>
                                            &nbsp;
                                            <CadDependente responsavel={r}/>
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
