import React, { useState } from 'react';

import './Login.css';

import twitterLogo from '../assets/twitter.svg'

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!username.length) return;
    
    localStorage.setItem('@GoTwitter:username', username);
    history.push(`/timeline`)
  }

  return (
    <div className="login-wrapper">
        <img src={twitterLogo} alt="Twitter Logo"/>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Nome de usuário"
            value={username}
            onChange={event => setUsername(event.target.value)}
            />
          <button type="submit">Entrar</button>
        </form>
    </div>
  );
}
