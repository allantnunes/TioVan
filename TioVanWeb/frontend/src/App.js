import React from 'react';
import './App.css';
import logo from './img/LogoPortal.PNG';


function App() {
  return (
    <div className="container">
      <img src={logo} />
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" />
        </form>
      </div>
      <div>
      <form>
          <label thmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Digite a senha"/>
        </form>
        <button type="submit">Entrar</button>
      </div>
    </div>

  );
}

export default App;
