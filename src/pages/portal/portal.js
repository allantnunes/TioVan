import React from 'react';
import NavbarP from '../snippets/navbarP'
import route from '../../public/img/route.svg';
import money from '../../public/img/money.svg';
import network from '../../public/img/network.svg';

import '../portal/Pt.css';

export default function portal() {
    return (
        <div>

            <NavbarP />
            <div className="container4">
                <div className="container1">
                    <div className="content1">
                        <center><img src={route} alt="route" /></center>
                        <p>
                            Busque a melhor <strong>ROTA</strong> para ir de encontro ao local dos <strong>PASSAGEIROS</strong>!
                        </p>

                        <form>
                            <button className="btn" type="button">Rotas</button>
                        </form>
                    </div>
                </div>

                <div className="container2">
                    <div className='content2'>
                        <center><img src={money} alt="money" /></center>
                        <p>
                            Administre seu <strong>CAIXA</strong> para que não haja <strong>PROBLEMAS</strong>!
                        </p>

                        <form>
                            <button className="btn2" type="button">Custos</button>
                        </form>
                    </div>
                </div>

                <div className="container3">
                    <div className='content3'>

                        <center><img src={network} alt="network" /></center>

                        <p>
                            Gerencie seus <strong>PASSAGEIROS</strong> e suas <strong>PARCELAS</strong> mensais!
                        </p>

                        <form>
                            <button className="btn3" type="button">Passageiros</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}