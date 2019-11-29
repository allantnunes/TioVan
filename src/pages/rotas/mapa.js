import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class mapa extends Component {
    static defaultProps = {
        center: {
            lat: 23.5584224,
            lng: 46.7878343
        },
        zoom: 6
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-8">
                        <div style={{ height: '80vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyBWlfCXss-69aRJLtZLvEjoudsXGxJ0S7s' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                                <AnyReactComponent
                                    lat={-23.560335}
                                    lng={-46.78692969999999}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover table-sm">
                                <thead className="text-center bordered">
                                    <tr>
                                        <th colSpan="5">Rotas</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" style={{fontWeight:'bold'}}>#</th>
                                        <th scope="col">Criança</th>
                                        <th scope="col">Ponto de Descida</th>
                                        <th scope="col">Responsável</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row"style={{fontWeight:'bold'}}>1</td>
                                        <td scope="row">Lucas Silva</td>
                                        <td scope="row">Rua Flora Rei, Nº123</td>
                                        <td scope="row">Mariana Silva</td>
                                    </tr>
                                    <tr>
                                    <td scope="row"style={{fontWeight:'bold'}}>2</td>
                                        <td scope="row">Pedro Ferreira</td>
                                        <td scope="row">Escola Estadual Benedicto Rosa</td>
                                        <td scope="row">Tio João</td>
                                    </tr>
                                    <tr>
                                    <td scope="row"style={{fontWeight:'bold'}}>3</td>
                                        <td scope="row">Maia Arruda</td>
                                        <td scope="row">Colégio Etapa</td>
                                        <td scope="row">Tia Rosa</td>
                                    </tr>
                                    <tr>
                                    <td scope="row"style={{fontWeight:'bold'}}>4</td>
                                        <td scope="row">Felipe Esteves</td>
                                        <td scope="row">Avenida Paulista, Nº365</td>
                                        <td scope="row">Jorge Esteves</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default mapa;