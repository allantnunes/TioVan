import React, { useState } from 'react';
import api from './services/api';
import './App.css';
import logo from './img/LogoPortal.PNG';
import { async } from 'q';




function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/motorista/cadastrar_motorista', email)

  }
  return (
    <div className="container">
      <img src={logo} />
      <h1>Login</h1>
      <form onSubmit>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
        <label thmlFor="senha">Senha</label>
        <input type="password" id="senha" placeholder="Digite a senha" />
      </form>
      <button className="btn" type="submit">Entrar</button>
    </div>

  );
}

export default App;
