import React, { Component } from 'react';
import axios from 'axios';

import Responsavel from './CadastroResponsavel';
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
        const url = `https://tiovan.herokuapp.com/responsavel`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ responsaveis: data })
                console.log(this.state.responsaveis)
                console.log(this.state.responsaveis[3].ativo)
            })
    }


    render() {
        return (
            <>
            <div className="col-10 offset-2">
                <table className="table table-striped table-bordered table-hover table-sm">
                    <thead className="thead-dark text-center">
                        <tr>
                            <th colSpan="6">Responsáveis </th>
                            <th><Responsavel /></th>
                        </tr>
                        <tr>
                            <th scope="col"><i className="fas fa-camera"></i>   </th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Status</th>
                            <th scope="col">Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.responsaveis.map(r => (
                            <tr key={r.id}>
                                <td scope="row" key={r.id}>{r.length}</td>
                                <td>{r.nome}&nbsp;</td>
                                <td>{r.email}&nbsp;</td>
                                <td>{r.celular}&nbsp;</td>


                                <td>{r.ativo}</td>
                                <td><button>delete</button><button>update</button><button>+ criança</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </>
        );
    }
}
