import React from 'react';
import NavbarP from '../snippets/navbarP'
import route from '../../public/img/route.svg';
import money from '../../public/img/money.svg';
import network from '../../public/img/network.svg';
import { Link } from 'react-router-dom';
import AppBarPortal from '../home/modules/views/AppBarPortal';

import '../portal/Pt.css';

export default function portal() {
    return (
        <div>

            <AppBarPortal />
            <div className="container4">
                <div className="container1">
                    <div className="content1">
                        <center><img src={route} alt="route" /></center>
                        <form>
                            <Link to="/motorista/rotas">
                                <center><button className="btn" type="button">ROTAS</button></center>
                            </Link>
                        </form>
                    </div>
                </div>

                <div className="container2">
                    <div className='content2'>
                        <center><img src={money} alt="money" /></center>
                        <form>
                            <Link to="/motorista/financeiro">
                                <center><button className="btn2" type="button">FINANCEIRO</button></center>
                            </Link>
                        </form>
                    </div>
                </div>

                <div className="container3">
                    <div className='content3'>
                        <center><img src={network} alt="network" /></center>
                        <form>
                            <Link to="/motorista/clientes">
                                <center><button className="btn3" type="button">PERFIS</button></center>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}