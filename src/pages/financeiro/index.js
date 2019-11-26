import React from 'react';
import AppBarPortal from '../home/modules/views/AppBarPortal';
import Despesas from '../../public/img/wallet.png';

import '../financeiro/style.css';
// import { Link } from '@material-ui/core';
import { Link } from "react-router-dom";

export default function Financeiro() {
    return (

        <div>
            <AppBarPortal />
            <Link to="/motorista/financeiro/despesas">
                <div className="containerF1">
                    <div className='contentF1'>
                        <center><img src={Despesas} alt="Despesas" /></center>
                        <p>
                            <strong> DESPESAS </strong>
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/motorista/financeiro/mensalidades">
                <div className="containerF2">
                    <div className='contentF1'>
                        <center><img src={Despesas} alt="Despesas" /></center>
                        <p>
                            <strong> MENSALIDADES </strong>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
