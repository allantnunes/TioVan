import React, {Component} from 'react';
import axios from 'axios';
import AppAppBar from '../home/modules/views/AppAppBar';

var urlMaps = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var endereco = '';
var keyApi = 'AIzaSyC3ip2OLNB1N5VZGqPvzAbQJYaLIUU70A0';

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
            logradouro: '',
            nomeRua: '',
            numero: '',
            complemento: '',
            cidade: '',
            bairro: '',
            uf: '',
            cep: '',
            latitude: '',
            longitude: '',
            stringCompleta: '',
            motorista: `${localStorage.getItem('user')}`
        }
    }

    changeHandler = e => {
        this.setState({[e.target.id]: e.target.value});
        console.log(this.state)
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.get(this.state.stringCompleta)
            .then((response) => {
                console.log(response);
                if (response.data.status == "OK") {
                    this.state.latitude = response.data.results[0].geometry.location.lat
                    this.state.longitude = response.data.results[0].geometry.location.lng

                    console.log("latitude: " + this.state.latitude)
                    console.log("longitude: " + this.state.longitude)

                    var jso = `
                        {
                            "nome":"${this.state.nome}",
                            "genero":"${this.state.genero}",
                            "ativo":"${this.state.ativo}",
                            "cpf":"${this.state.cpf}",
                            "celular":"${this.state.cpf}",
                            "email":"${this.state.email}",
                            "endereco":{
                                "logradouro":"${this.state.logradouro}",
                                "numero":${this.state.numero},
                                "complemento":"${this.state.complemento}",
                                "cidade":"${this.state.cidade}",
                                "bairro":"${this.state.bairro}",
                                "uf":"${this.state.uf}",
                                "cep":"${this.state.cpf}",
                                "latitude":"${this.state.latitude}",
                                "longitude":"${this.state.longitude}"},
                            "motorista":"${localStorage.getItem('user')}"
                            }
                        `;
                    console.log(jso);

                    axios.post('https://tiovan.herokuapp.com/responsavel/cadastro', JSON.parse(jso))
                        .then(response => {
                            console.log(response);
                            window.location.reload(true);
                        })
                        .catch(error => {
                            console.log(error)
                        })
                } else if (response.data.status === "ZERO_RESULTS") {
                    console.log("Status: " + response.status.toString())
                    window.alert("Endereço não encontrado!")
                }
            })

    }

    getCep = e => {
        console.log(`${[e.target.id]}, ${e.target.value}`);
        const url = `https://viacep.com.br/ws/${e.target.value}/json/`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.state.logradouro = data.logradouro;
                this.state.bairro = data.bairro;
                this.state.cidade = data.localidade;
                this.state.uf = data.uf;
                this.state.nomeRua = "jojo";
                document.getElementById('endereco').value = `${data.logradouro}`;

                endereco = `${data.logradouro}+${data.cep}+${data.bairro}+${this.state.numero}`;

                var enderecoAux = urlMaps + endereco + "&key=" + keyApi;

                this.state.stringCompleta = enderecoAux.replace(/ /g, '+').trim();
            })
    }


    /*axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${e.target.value}&key=AIzaSyBWlfCXss-69aRJLtZLvEjoudsXGxJ0S7s`)
    .then(response =>response.data)
    .then((data)=>{
        document.getElementById('endereco').value+=`, ${data.results[0].formatted_address}`;
        this.state.longitude = data.results[0].geometry.location.lng;
        this.state.latitude = data.results[0].geometry.location.lat;
    })*/


    render() {

        const {nome, genero, ativo, cpf, celular, email} = this.state
        return (
            <>

                <button type="button" className="btn btn-dark btn-sm" data-toggle="modal"
                        data-target="#modalResponsavel">Cadastrar Responsavel
                </button>

                <div className="modal fade text-left" id="modalResponsavel" tabIndex="-1" role="dialog"
                     aria-labelledby="modalResponsavelLabel" aria-hidden="true" style={{marginTop: '60px'}}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content" style={{color: "#000"}}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalResponsavelLabel">Cadastrar Responsável</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <form onSubmit={this.submitHandler}>
                                            <div className="container-fluid">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="nome">Nome</label>
                                                            <input type="text" className="form-control" id="nome"
                                                                   onChange={this.changeHandler}
                                                                   placeholder="Fulano da Silva"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="email">E-mail</label>
                                                            <input type="email" className="form-control" id="email"
                                                                   onChange={this.changeHandler}
                                                                   placeholder="email@exemplo.com"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="celular">Celular</label>
                                                            <input type="text" className="form-control" id="celular"
                                                                   onChange={this.changeHandler}
                                                                   placeholder="(11) 4002-8922"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="cpf">CPF</label>
                                                            <input type="text" className="form-control" id="cpf"
                                                                   onChange={this.changeHandler}
                                                                   placeholder="507.245.798-12"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label htmlFor="genero">Gênero</label>
                                                            <select className="form-control" id="genero"
                                                                    onChange={this.changeHandler}>
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
                                                            <input type="text" className="form-control" id="ativo"
                                                                   onChange={this.changeHandler}
                                                                   placeholder="Ativo / Inativo"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="form-row">
                                                    <div className="col-2">
                                                        <div className="form-group">
                                                            <label for="cep">CEP</label>
                                                            <input type="text" className="form-control" id="cep"
                                                                   onMouseOut={this.getCep}
                                                                   onChange={this.changeHandler} placeholder="cep"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="form-group">
                                                            <label for="endereco">Endereço</label>
                                                            <input type="text" className="form-control" id="endereco"
                                                                   placeholder="xxx"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div className="form-group">
                                                            <label for="numero">Número</label>
                                                            <input type="text" className="form-control" id="numero"
                                                                   onChange={this.changeHandler} placeholder="xxx"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="form-group">
                                                            <label for="complemento">Complemento</label>
                                                            <input type="text" className="form-control" id="complemento"
                                                                   onChange={this.changeHandler} placeholder="xxx"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="mx-auto p-2">
                                                    <button type="button" className="btn btn-secondary"
                                                            data-dismiss="modal">Fechar
                                                    </button>
                                                    &nbsp;&nbsp;
                                                    <button type="submit" className="btn btn-primary"
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

            </>
        );
    }
}