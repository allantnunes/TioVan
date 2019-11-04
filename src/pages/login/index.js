import React, { useState } from 'react';
import api from '../../services/api';
import '../login/App.css';
import Navbar from '../snippets/navbar';

export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/motorista/login', email, senha)

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/motorista/dashboard');

    }
    return (
        <>
            <Navbar />
            
            <div className="containerLogin">
                <div className="contentLogin">
                    <div className="logo" />
                    <center><h1>Login</h1></center>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="E-mail"
                            value={email}
                            onChange={event => setEmail(event.target.value)} />
                        <label thmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite a senha"
                            value={senha}
                            onChange={event => setSenha(event.target.value)} />
                    </form>

                    <center><p>Não é cadastrado? clique <a href="/cadastro">aqui</a></p></center>

                    <button className="btnLogin" type="submit" >Entrar</button>
                </div>
            </div>
           
        </>
    );
}
