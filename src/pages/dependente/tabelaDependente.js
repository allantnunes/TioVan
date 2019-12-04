import React, {Component} from 'react';
import axios from 'axios';

import Dependente from './CadastroDependente';

const tb = {
    background: '#d2d2d2'
};

const tr = {
    margin: '4px'
}

//  <Tabela data={dados} />
export default class Tabela extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dependentes: []
        }
    }

    componentDidMount() {
        //const url = `https://tiovan.herokuapp.com/motorista/getclientesbyid/${localStorage.getItem('user')}`;
        // const url = `https://tiovan.herokuapp.com/dependente`;
        console.log("RESPOSTA RESPONSAVEIS")
        console.log(this.props.res.id)
        const url = `https://tiovan.herokuapp.com/responsavel/getdependentesbyid/${this.props.res.id}`
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.state.dependentes.length = 0
                this.props.res.length = 0
                this.setState({dependentes: data})
            })
    }

    render() {
        return (
            <>
                <button type="button" className="btn btn-warning btn-sm" data-toggle="modal"
                        data-target="#modalKid">Listar
                </button>

                <div className="modal fade text-left" id="modalKid" tabIndex="-1" role="dialog"
                     aria-labelledby="modalKidLabel" aria-hidden="true" style={{marginTop: '60px'}}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalKidLabel">Dependentes de {this.props.res.nome}</h5>
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
            </>
        );
    }
}
