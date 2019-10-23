import React, { useState } from 'react';
import api from '../../services/api';
import '../../pages/login/App.css';


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
            <h1>Login</h1>
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
            <button className="btnLogin" type="submit">Entrar</button>

        </>
    );
}
