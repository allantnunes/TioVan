import React from 'react';

import route from '../../public/img/route.svg';
import money from '../../public/img/money.svg';
import network from '../../public/img/network.svg';

export default function portal(){
    return (
        <>
           <div>
           <img src= {route} alt="route" />

                <p>
                Busque a melhor <strong>ROTA</strong> para ir de encontro ao local dos <strong>PASSAGEIROS</strong>!
                </p>

                <form>
                <button className="btn" type = "button">Rotas</button>
                </form>
            </div>
            
            <div className="container2">
                <img src= {money} alt="money" />

                
                <div className = 'content2'>
                <p>
                    Administre seu <strong>CAIXA</strong> para que não haja <strong>PROBLEMAS</strong>!
                </p>

                <form>
                    <button className="btn2" type = "button">Custos</button>
                </form>
            </div>
            </div>
            
            <div className="container3">
                <img src= {network} alt="network" />

                
                <div className = 'content3'>
                    <p>
                    Gerencie seus <strong>PASSAGEIROS</strong> e suas <strong>PARCELAS</strong> mensais!
                    </p>

                    <form>
                    <button className="btn3" type = "button">Passageiros</button>
                    </form>
                </div>
            </div>
        </>
    )
}