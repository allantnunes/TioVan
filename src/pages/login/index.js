import React, { useState } from 'react';
import api from '../../services/api';
import '../login/App.css';
import Navbar from '../snippets/navbar';

export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const login = {email: email, senha: senha}
    var _id = "";
    async function handleSubmit(event) {
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
        localStorage.setItem('user', _id);

        history.push('/motorista/portal');

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
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite a senha"
                            value={senha}
                            onChange={event => setSenha(event.target.value)} />
                    

                    <center><p>Não é cadastrado? clique <a href="/motorista/cadastro">aqui</a></p></center>

                    <button type="submit" className="btnLogin">Entrar</button>
                    </form>
                </div>
            </div>
           
        </>
    );
}
