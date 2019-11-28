import React from 'react';
import NavbarP from '../snippets/navbarP'
import route from '../../public/img/route.svg';
import money from '../../public/img/money.svg';
import network from '../../public/img/network.svg';
import { Link } from 'react-router-dom';
import AppBarPortal from '../home/modules/views/AppBarPortal';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import '../portal/Pt.css';
import zIndex from '@material-ui/core/styles/zIndex';

export default function Portal() {
    return (
        <div>
            <div>
                <AppBarPortal />
            </div>

            <SideNav style={{ zIndex: "999999" }}

                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <a href="/motorista/financeiro/despesas">kapa</a>
                        </NavIcon>
                        <NavText>
                            <a href="/motorista/financeiro/despesas">kapa</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Charts
            </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

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

