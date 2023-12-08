import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const WpLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://projeto.codesdevs.com/wp-json/custom/v1/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data) {
        // O login foi bem-sucedido
        console.log('Login bem-sucedido!');
        localStorage.setItem('authToken', 'seu-token-aqui');
        onLogin(true);
      } else {
        // O login falhou
        console.error('Login falhou');
        onLogin(false);
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      onLogin(false);
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Nome de usuário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default WpLogin;
