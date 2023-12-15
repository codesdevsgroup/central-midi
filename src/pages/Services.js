import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'; // Importe o Redirect se estiver usando React Router
import AuthService from '../services/login/AuthService';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const data = await AuthService.login(email, password);
      console.log(data);
      // Aqui você pode salvar o token JWT e redirecionar o usuário
      setLoggedIn(true);
    } catch (error) {
      console.error('Erro ao fazer login', error);
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

/*   if (loggedIn) {
    return <Redirect to="/dashboard" />; // Redirecione para a página desejada após o login
  }
 */
  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>

      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
