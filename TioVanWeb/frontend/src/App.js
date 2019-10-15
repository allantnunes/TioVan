import React from 'react';
import './App.css';
import logo from './img/LogoPortal.PNG'

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
    </div>

  );
}

export default App;
