import React, { useState } from 'react';
import api from '../../services/api';
import '../login/App.css';
import AppAppBar from '../home/modules/views/AppAppBar';
import { Link } from "react-router-dom";


export default function Login({ history }) {

    const [email, getEmail] = useState('');
    const [senha, getSenha] = useState('');
    const login = { email: email, senha: senha }
    var _id = "";
    async function handleLogin(event) {
        event.preventDefault();

        const response = await api.post('https://tiovan.herokuapp.com/motorista/login', login)
            .then(response => {
                console.log(response);
                _id = response.data;
            })
            .catch(error => {
                console.log(error)
            })


        console.log(_id);
        // localStorage.setItem('user', _id);

        history.push('/motorista/portal');

    }
    return (
        <>
            <AppAppBar />

            <div className="containerLogin">
                <div className="contentLogin">
                    <div className="logo" />
                    <center><h1>Login</h1></center>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="E-mail"
                            value={email}
                            onChange={event => getEmail(event.target.value)} />
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite a senha"
                            value={senha}
                            onChange={event => getSenha(event.target.value)} />


                        <center><p>Não é cadastrado? clique <Link to="/motorista/cadastro">aqui</Link></p></center>

                        <Link to="/motorista/portal">
                            <button type="submit" className="btnLogin">Entrar</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}
