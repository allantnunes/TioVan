import React, { Component } from 'react';
import axios from 'axios';
import {Map, GoogleApiWrapper, Marker, Polyline, InfoWindow} from 'google-maps-react';
import {forEach} from "react-bootstrap/cjs/utils/ElementChildren";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

var keyApi = 'AIzaSyC3ip2OLNB1N5VZGqPvzAbQJYaLIUU70A0';

class MapContainer extends Component {

    static defaultProps = {
        itinerarios: [],
        center: {
            lat: -23.5686879,
            lng: -46.647775
        },
        zoom: 12,
        clientes: [],
        dependentes: [],
        arrayAuxiliar: []
    };

    componentDidMount(){
        console.log("Montar Lista")

        axios.get(`https://tiovan.herokuapp.com/motorista/getclientesbyid/${localStorage.getItem('user')}`)
            .then((response)=>{
                if(response.status == 200){
                    console.log("Clientes carregados com sucesso")
                    this.props.clientes.length = 0;
                    this.props.itinerarios.length = 0;

                    {response.data[0].clientes.map((c,i) =>{
                        axios.get(`https://tiovan.herokuapp.com/responsavel/getbyid/${c}`).then((response) => {
                            if(response.status == 200){
                                if(response.data){
                                    console.log(response.data)
                                    this.setState({
                                        clientes: this.props.clientes.push(response.data),
                                        itinerarios: this.props.itinerarios.push({lat: response.data.endereco.latitude, lng: response.data.endereco.longitude})
                                    })
                                    console.log("Props clientes")
                                    console.log(this.props.clientes)

                                }
                            }
                        })
                    })
                    }

                }}
                )

    }

    exibirPontosDeParadas(){
        return(

    this.props.clientes.map((c,i) => (
        c.dependentes_nome.map((d) => (
            <tr>
                <td scope="row" style={{fontWeight:'bold'}}>{i+1}</td>
                <td scope="row">{d}</td>
                <td scope="row">{c.endereco.logradouro}, {c.endereco.numero}</td>
                <td scope="row">{c.nome}</td>
            </tr>
            ))


        ))

    )
    }

    mostrarMarkers = () => {
        return this.props.itinerarios.map((localidade, index) => {
            return <Marker key={index+1} id={index+1} label={(index+1).toString()} position={{
                lat: localidade.lat,
                lng: localidade.lng
            }}
            >
                {
                    <InfoWindow>
                        <div>
                            <h4>Nome do responsável, talvez</h4>
                            <span>descrição</span>
                        </div>
                    </InfoWindow>

                }

            </Marker>


        })
    }

    render() {
        return (
            <>
                <h2>Mapa - Rotas</h2>
                <div className="row">
                    <div className="col-8" >
                        <div style={{ height: '85vh', width: '100%' }}>
                            <Map
                                google={this.props.google}
                                bootstrapURLKeys={{ key: keyApi }}
                                initialCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                                {this.mostrarMarkers()}
                                <Marker key={80} id={80} label={"P"} position={{
                                    lat: -23.5605017,
                                    lng: -46.6660753
                                }}
                                >
                                </Marker>
                            </Map>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover table-sm">
                                <tr>
                                    <th colSpan="5">Ponto de Partida</th>
                                </tr>
                                <tr>
                                    <th>Instituição</th>
                                    <th>Endereço</th>
                                </tr>
                                <tr>
                                    <td>Escola Infatil Jardins</td>
                                    <td>Rua Bela Cintra, 1717</td>
                                </tr>

                            </table>
                            <table className="table table-bordered table-hover table-sm">
                                <thead className="text-center bordered">
                                <tr>
                                    <th colSpan="5">Rotas</th>
                                </tr>
                                <tr>
                                    <th scope="col" style={{ fontWeight: 'bold' }}>#</th>
                                    <th scope="col">Criança</th>
                                    <th scope="col">Ponto de Descida</th>
                                    <th scope="col">Responsável</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.exibirPontosDeParadas()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
/*
                                    <tr>
                                        <td scope="row" style={{ fontWeight: 'bold' }}>1</td>
                                        <td scope="row">Lucas Silva</td>
                                        <td scope="row">Rua Flora Rei, Nº123</td>
                                        <td scope="row">Mariana Silva</td>
                                    </tr>
                                    <tr>
                                        <td scope="row"style={{fontWeight:'bold'}}>2</td>
                                        <td scope="row" style={{ fontWeight: 'bold' }}>2</td>
                                        <td scope="row">Pedro Ferreira</td>
                                        <td scope="row">Escola Estadual Benedicto Rosa</td>
                                        <td scope="row">Tio João</td>
                                    </tr>
                                    <tr>
                                        <td scope="row"style={{fontWeight:'bold'}}>3</td>
                                        <td scope="row" style={{ fontWeight: 'bold' }}>3</td>
                                        <td scope="row">Maia Arruda</td>
                                        <td scope="row">Colégio Etapa</td>
                                        <td scope="row">Tia Rosa</td>
                                    </tr>
                                    <tr>
                                        <td scope="row"style={{fontWeight:'bold'}}>4</td>
                                        <td scope="row" style={{ fontWeight: 'bold' }}>4</td>
                                        <td scope="row">Felipe Esteves</td>
                                        <td scope="row">Avenida Paulista, Nº365</td>
                                        <td scope="row">Jorge Esteves</td>
                                    </tr>*/
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC3ip2OLNB1N5VZGqPvzAbQJYaLIUU70A0'
})(MapContainer);