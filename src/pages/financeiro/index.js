import React from 'react';
import Routes from 'react-router-dom';
import AppBarPortal from '../home/modules/views/AppBarPortal';
import Despesas from '../../public/img/money.svg';
import '../financeiro/style.css';
// import { Link } from "react-router-dom";

export default function Financeiro() {
    return (

        <div>
            <AppBarPortal />
            <div className="containerF1">
                <div className='contentF1'>
                    <center><img src={Despesas} alt="Despesas" /></center>
                    <p>
                        <strong> DESPESAS </strong>
                    </p>
                    <form>
                        <button className="btnF1" type="button">Custos</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
