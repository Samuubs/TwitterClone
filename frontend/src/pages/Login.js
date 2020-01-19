import React from 'react';

import './Login.css'

import twitterLogo from '../assets/twitter.svg'

export default function pages() {
  return (
    <div className="login-wrapper">
        <img src={twitterLogo} alt="Twitter Logo"/>
        <form>
          <input placeholder="Nome de usuário"/>
          <button type="submit">Entrar</button>
        </form>
    </div>
  );
}
