// WpLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const WpLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Fazer a chamada à API de autenticação do WordPress
      const response = await axios.post('https://projeto.codesdevs.com/?rest_route=/simple-jwt-login/v1/autologin&JWT=JWT', {
        username,
        password,
      });

      // Obter o token JWT da resposta
      const token = response.data.token;

      // Decodificar o token JWT para obter informações do usuário
      const decodedToken = jwtDecode(token);

      // Você pode armazenar o token em localStorage ou em um estado do React para uso futuro
      localStorage.setItem('token', token);

      // Lógica adicional após o login bem-sucedido
      console.log('Login bem-sucedido!', decodedToken);
    } catch (error) {
      // Tratar erros de autenticação
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default WpLogin;
